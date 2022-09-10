const express = require("express");
const Router = express.Router();
const searchService = require("../services/schedule.service");

Router.get("/", (req, resp) => {
  resp.send();
});

Router.get("/:inStation/:outStation/:date/:time", async (req, resp) => {
  // returns the matching schedules list from the schedules_has_station_table
  const result = await searchService.searchSchedule(
    req.params.inStation,
    req.params.outStation,
    req.params.date,
    req.params.time
  );
  const result2 = await Promise.all(
    result.map((i) =>
      searchService.getSchedulesbyID(
        i.scheduleID,
        req.params.inStation,
        req.params.outStation
      )
    )
  );
  resp.send(result2);
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
