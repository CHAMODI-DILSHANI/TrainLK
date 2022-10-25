const e = require("express");
const { query } = require("../helpers/mysql.init");

function getAvailableTrains() {
  return new Promise((resolve, reject) => {
    const date = new Date();
    let dateFilter = "";
    for (let i = 1; i <= 7; i++) {
      if (i == date.getDay()) dateFilter += "1";
      else dateFilter += "_";
    }

    query(
      `select * 
        from schedule a 
        join train b on a.trainID = b.trainID 
        join schedule_has_station c on c.scheduleID = a.scheduleID 
        where a.frequency like "${dateFilter}" and c.stationOrder = 1
        ORDER By c.stationOrder, c.arrivalTime`,
      (err, rows, fields) => {
        if (err) {
          reject(err);
        } else {
          let data = [];
          rows.forEach(row => {
            data.push({
              scheduleID: row.scheduleID,
              trainName: row.trainName,
            });
          });
          resolve(data);
        }
      }
    );
  });
}

async function getAvailableTrainInfo(scheduleID) {
  try {
    const result = await query(
      `
                (select a.trainID, a.type, b.arrivalTime, b.departureTime, c.stationName from
                schedule a join schedule_has_station b on a.scheduleID = b.scheduleID
                join station c on b.stationID = c.stationID
                where a.scheduleID = ${scheduleID}
                order by stationOrder ASC
                LIMIT 1)
                UNION
                (select a.trainID, a.type, b.arrivalTime, b.departureTime, c.stationName from
                schedule a join schedule_has_station b on a.scheduleID = b.scheduleID
                join station c on b.stationID = c.stationID
                where a.scheduleID = ${scheduleID}
                order by stationOrder DESC
                LIMIT 1)
                `
    );
    return result;
  } catch (err) {
    return err;
  }
}

function getAllStations(scheduleID) {
  console.log(scheduleID);

  return new Promise((reject, resolve) => {
    query(
      `select a.trainID, a.scheduleID, a.type, b.arrivalTime, b.departureTime, c.stationID, c.stationName from
        schedule a join schedule_has_station b on a.scheduleID = b.scheduleID
        join station c on b.stationID = c.stationID
        where a.scheduleID = ${scheduleID}
        order by stationOrder
    `,
      (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      }
    );
  });
}

module.exports = { getAvailableTrains, getAvailableTrainInfo, getAllStations };
