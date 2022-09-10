const express = require("express");
const Router = express.Router();
const scheduleService = require("../services/schedule.service");

Router.get("/", (req, resp) => {
  resp.send();
});

Router.get("/:inStation/:outStation/:date/:time", async (req, resp) => {
  // returns the matching schedules list from the schedules_has_station_table
  const result = await scheduleService.searchSchedule(
    req.params.inStation,
    req.params.outStation,
    req.params.date,
    req.params.time
  );
  const result2 = await Promise.all(
    result.map((i) =>
      scheduleService.getSchedulesbyID(
        i.scheduleID,
        req.params.inStation,
        req.params.outStation
      )
    )
  );
  resp.send(result2);
});

Router.post("/", (req, res) => {
  // req.body.stations.forEach((val) => {
  //   console.log(val);
  // });
  scheduleService.createNewSchedule(req.body);
  res.send(req.body);
});

// async function getStartNDestination(scheduleID) {
//   const result = await query(
//     "select stationName, stationOrder from station st join schedule_has_station s on st.stationID=s.stationID where s.scheduleID=? order by stationOrder",
//     [scheduleID]
//   );
//   console.log(result);
//   return [];
// }

module.exports = Router;
