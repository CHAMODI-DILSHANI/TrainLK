const express = require("express");
const Router = express.Router();
const { query } = require("../helpers/mysql.init");

Router.get("/", (req, resp) => {
  resp.send();
});

Router.get("/:inStation/:outStation/:date/:time", async (req, resp) => {
  // returns the matching schedules list from the schedules_has_station_table
  const result = await searchSchedule(
    req.params.inStation,
    req.params.outStation,
    req.params.date,
    req.params.time
  );
  const result2 = await Promise.all(
    result.map((i) =>
      getSchedulesbyID(
        i.scheduleID,
        req.params.inStation,
        req.params.outStation
      )
    )
  );
  resp.send(result2);
});

// function to search matching stations
async function searchSchedule(inStation, outStation, date, time) {
  const result = await query(
    "select * from schedule_has_station where stationID in(?,?) order by scheduleID,stationOrder",
    [inStation, outStation]
  );

  // this doesnt work (just skips on before it returns)
  // console.log(await result.filter(filterSchedule));

  // **************************************************************************************
  // stollen(from the internet ) async vertion of above function
  // https://advancedweb.hu/how-to-use-async-functions-with-array-filter-in-javascript/
  // this is the link btw
  const asyncFilter = async (arr, predicate) => {
    const results = await Promise.all(arr.map(predicate));

    return arr.filter((_v, index) => results[index]);
  };

  const asyncRes = await asyncFilter(result, async (i, index, array) => {
    await sleep(10);
    if (array[index + 1] != undefined) {
      if (
        array[index + 1].scheduleID == i.scheduleID &&
        // end station
        array[index + 1].stationID == outStation &&
        // start station
        i.stationID == inStation
      ) {
        return true;
      } else {
        return false;
      }
    }
  });
  // *******************************************************************************************

  return asyncRes;
}

// givesout details of individual stations for the get method
async function getSchedulesbyID(scheduleID, inStation, outStation) {
  const result = await query("select * from schedule where scheduleID=?", [
    scheduleID,
  ]);

  await Promise.all(
    result.map(async (r) => {
      r.stations = await getStationNames(r.scheduleID);
      r.startStation = r.stations[0].stationName;
      r.endStation = r.stations[r.stations.length - 1].stationName;
      r.frequency = await changefrequency(r.frequency);
      r.trainInfo = await getTrainInfo(r.trainID);
      delete r.trainID;
    })
  );

  await Promise.all(
    result.map(async (r) => {
      const data = await getStationNameNDistance(
        inStation,
        outStation,
        scheduleID
      );
      r.inStation = data.inStation;
      r.outStation = data.outStation;
      r.distance = data.distance;
      r.inInfo = data.inInfo;
      r.outInfo = data.outInfo;
      var timeDiff =
        (new Date("01/01/2020 " + data.outInfo.in) -
          new Date("01/01/2020 " + data.inInfo.out)) /
        60.0 /
        1000.0;
      if (timeDiff > 60) {
        var temp = 0;
        while (timeDiff > 60) {
          temp++;
          timeDiff -= 60;
        }
        timeDiff = temp + " h " + timeDiff + " mins";
      } else {
        timeDiff = timeDiff + " mins";
      }
      r.travelDuration = timeDiff;
    })
  );
  return result;
}

//returns all the stations in the route
async function getStationNames(scheduleID) {
  const result = await query(
    "select stationName from schedule_has_station sh join station st on sh.stationID = st.stationID where sh.scheduleID = ? order by stationOrder",
    [scheduleID]
  );
  //   console.log(result);
  return result;
}

// gets all info about arrival departure of two stations given
async function getStationNameNDistance(inStationID, outStationID, scheduleID) {
  const result = await query(
    "select stationName, distanceFromFort,arrivalTime,departureTime from station st join schedule_has_station s on st.stationID=s.stationID where st.stationID = ? and scheduleID=?",
    [inStationID, scheduleID]
  );
  const result2 = await query(
    "select stationName, distanceFromFort,arrivalTime,departureTime from station st join schedule_has_station s on st.stationID=s.stationID where st.stationID = ? and scheduleID=?",
    [outStationID, scheduleID]
  );
  return {
    inStation: result[0].stationName,
    outStation: result2[0].stationName,
    distance: abs(result[0].distanceFromFort - result2[0].distanceFromFort),
    inInfo: {
      in: result[0].arrivalTime,
      out: result[0].departureTime,
    },
    outInfo: {
      in: result2[0].arrivalTime,
      out: result2[0].departureTime,
    },
  };
}

async function getTrainInfo(trainID) {
  const result = await query(
    "select trainNo,trainName from train where trainID=?",
    [trainID]
  );
  return result;
}

// async function getStartNDestination(scheduleID) {
//   const result = await query(
//     "select stationName, stationOrder from station st join schedule_has_station s on st.stationID=s.stationID where s.scheduleID=? order by stationOrder",
//     [scheduleID]
//   );
//   console.log(result);
//   return [];
// }

// sleep function
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function abs(x) {
  if (x < 0) {
    return -x;
  } else {
    return x;
  }
}

// console.log(frequency("11001"));
// chenges frequency
function changefrequency(string) {
  const daily = /1111111/;
  const weekly = /0111110/;
  const weekend = /1000001/;
  if (daily.test(string)) {
    return "Daily";
  } else if (weekly.test(string)) {
    return "Weelkly";
  } else if (weekend.test(string)) {
    return "Weekend";
  } else {
    return "Other";
  }
}

module.exports = Router;
