const e = require("express");
const express = require("express");
const Router = express.Router();
const { getAllStations } = require("../services/update.service");
const {
  getAvailableTrains,
  getAvailableTrainInfo,
} = require("../services/update.service");

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

Router.post("/status", (req, res) => {
  const { dateNTime, selectedStation, moderatorID, status, passangerStatus } =
    req.body;

  console.log(dateNTime);
  console.log(selectedStation);
  console.log(moderatorID);
  console.log(status);
  console.log(passangerStatus);

  return res.send(JSON.stringify({ hi: "data" }));
});

module.exports = Router;
