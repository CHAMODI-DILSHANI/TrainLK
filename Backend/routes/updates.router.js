const e = require("express");
const express = require("express");
const Router = express.Router();
const {
  getAllStations,
  getStationName,
  getAllStationsAwait,
  getArrivalTime,
} = require("../services/update.service");
const {
  getAvailableTrains,
  getAvailableTrainInfo,
} = require("../services/update.service");
const redisClient = require("./../helpers/redis.init");

Router.get("/available-trains", async (req, res) => {
  try {
    const result = await getAvailableTrains();
    const result2 = await Promise.all(
      result.map(i => getAvailableTrainInfo(i.scheduleID))
    );

    for (let i = 0; i < result.length; i++) {
      result[i].info = result2[i];
    }

    res.send(result);
  } catch (err) {}
});

Router.get("/available-trains-with-all-stations", async (req, res) => {
  try {
    const result = await getAvailableTrains();
    const result2 = await Promise.all(
      result.map(i => getAllStationsAwait(i.scheduleID))
    );

    for (let i = 0; i < result.length; i++) {
      result[i].info = result2[i];
    }

    res.send(result);
  } catch (err) {}
});

// Get all the stations of a schedule
Router.get("/stations/:scheduleID", (req, res) => {
  const scheduleID = req.params.scheduleID;
  getAllStations(scheduleID)
    .then(stations => {
      return res.send(stations);
    })
    .catch(err => {
      return res.status(401).send(err);
    });
});

// Status update
Router.post("/status", async (req, res) => {
  const {
    dateNTime,
    selectedStation,
    moderatorID,
    statusLocation,
    passangerStatus,
    moderatorLocation,
  } = req.body;

  // console.log(req.body);

  // console.log(dateNTime);
  // console.log(selectedStation);
  // console.log(moderatorID);
  // console.log(status);
  // console.log(passangerStatus);
  // console.log(moderatorLocation);

  try {
    // key format --> 2022-10-12-{scheduleID}-{stationID}
    const key = `${dateNTime.year}-${dateNTime.month}-${dateNTime.date}-${selectedStation.scheduleID}-${selectedStation.stationID}`;
    console.log(`key    --> ${key}`);
    record = await redisClient.get(`${key}`);

    // await redisClient.del(key);

    if (record == null) {
      console.log("Setting timeout...");

      setTimeout(async () => {
        const keyVal = key;
        let collectedData = await redisClient.get(`${key}`);
        console.log("----- Collected Data ------");

        // Process collected data

        collectedData = await JSON.parse(collectedData);

        let COUNT_PASSING = 0;
        let COUNT_STOPPED = 0;
        let COUNT_RTL = 0;
        let COUNT_OUT = 0;

        collectedData.forEach(datapoint => {
          if (datapoint.statusLocation == "PASSING") COUNT_PASSING++;
          else if (datapoint.statusLocation == "STOPPED") COUNT_STOPPED++;
          else if (datapoint.statusLocation == "RTL") COUNT_RTL++;
          else if (datapoint.statusLocation == "OUT") COUNT_OUT++;
        });

        console.log(`COUNT PASSING: ${COUNT_PASSING}`);
        console.log(`COUNT STOPPED: ${COUNT_STOPPED}`);
        console.log(`COUNT RTL: ${COUNT_RTL}`);
        console.log(`COUNT OUT: ${COUNT_OUT}`);

        let maxOption = Math.max(
          COUNT_PASSING,
          COUNT_STOPPED,
          COUNT_RTL,
          COUNT_OUT
        );

        let updateStatus = "";
        if (maxOption == COUNT_PASSING) updateStatus = "PASSING";
        else if (maxOption == COUNT_STOPPED) updateStatus = "STOPPED";
        else if (maxOption == COUNT_RTL) updateStatus = "RTL";
        else if (maxOption == COUNT_OUT) updateStatus = "OUT";

        console.log(updateStatus);

        let timeH = 0;
        let timeM = 0;
        let timeS = 0;
        for (let i = 0; i < collectedData.length; i++) {
          if (collectedData[i].statusLocation == updateStatus) {
            timeH = collectedData[i].timeH;
            timeM = collectedData[i].timeM;
            timeS = collectedData[i].timeS;
            break;
          }
        }

        console.log(`Time --> ${timeH}:${timeM}:${timeS}`);

        const key2 = `${dateNTime.year}-${dateNTime.month}-${dateNTime.date}-${selectedStation.scheduleID}`;
        let arrayOfKeyElements = key.split("-");

        await redisClient.setEx(
          `UPDATE-${key2}`,
          60000,
          JSON.stringify({
            stationID: `${arrayOfKeyElements[arrayOfKeyElements.length - 1]}`,
            time: `${timeH}:${timeM}:${timeS}`,
            status: updateStatus,
          })
        );

        await redisClient.del(keyVal);
      }, 10000);

      console.log("setting...");
      let updates = [];
      updates.push({
        statusLocation,
        passangerStatus,
        timeH: dateNTime.timeH,
        timeM: dateNTime.timeM,
        timeS: dateNTime.timeS,
      });
      await redisClient.set(key, JSON.stringify(updates));
    } else {
      console.log("updating...");
      record = JSON.parse(record);
      record.push({
        statusLocation,
        passangerStatus,
        timeH: dateNTime.timeH,
        timeM: dateNTime.timeM,
        timeS: dateNTime.timeS,
      });
      // console.log(record);
      await redisClient.set(key, JSON.stringify(record));
    }

    return res.send(JSON.stringify({ success: "true" }));
  } catch (err) {
    return res.status(501).send(JSON.stringify({ error: "Error" }));
  }
});

Router.get("/status/:scheduleID", async (req, res) => {
  const scheduleID = req.params.scheduleID;
  const stationID = req.params.stationID;

  const date = new Date();
  const key = `UPDATE-${date.getFullYear()}-${date.getMonth()}-${date.getDate()}-${scheduleID}`;
  const record = await redisClient.get(key);

  return res.send(record);
});

Router.get("/station/:stationID", async (req, res) => {
  const stationID = req.params.stationID;
  console.log(stationID);

  getStationName(stationID)
    .then(data => {
      return res.status(200).send(data[0]);
    })
    .catch(err => {
      return res.status(404).send(err);
    });
});

Router.get("/get-station-arrival-time/:scheduleID/:stationID", (req, res) => {
  const scheduleID = req.params.scheduleID;
  const stationID = req.params.stationID;

  getArrivalTime(scheduleID, stationID)
    .then(data => {
      console.log("------ Time ------");
      console.log(data);
      return res.send(JSON.stringify(data));
    })
    .catch(err => {
      return res.send(err);
    });
});

module.exports = Router;
