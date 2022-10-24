const e = require("express");
const express = require("express");
const Router = express.Router();
const { query } = require("../helpers/mysql.init");

Router.get("/available-trains", (req, res) => {
  const date = new Date();
  let dateFilter = "";
  for (let i = 1; i <= 7; i++) {
    if (i == date.getDay()) {
      dateFilter += "1";
    } else {
      dateFilter += "_";
    }
  }

  query(
    // select * from schedule a join train b on a.trainID = b.trainID where a.frequency like "${dateFilter}"
    `
    select * 
    from schedule a 
    join train b on a.trainID = b.trainID 
    join schedule_has_station c on c.scheduleID = a.scheduleID 
    where a.frequency like "${dateFilter}" and c.stationOrder = 1
    ORDER By c.stationOrder, c.arrivalTime`,
    (err, rows, fields) => {
      if (err) {
        return res.status(401).send("Not found");
      } else {
        let data = [];
        rows.forEach(record => {
          console.log(record.scheduleID);
          let temp = { scheduleID: record.scheduleID, train: record.trainName };
          let stationArr = [];

          query(
            `
            (select a.*, b.*, c.stationName from 
            schedule a join schedule_has_station b on a.scheduleID = b.scheduleID 
            join station c on b.stationID = c.stationID
            where a.scheduleID = ${temp.scheduleID}
            order by stationOrder ASC
            LIMIT 1)
            UNION
            (select a.*, b.*, c.stationName from 
            schedule a join schedule_has_station b on a.scheduleID = b.scheduleID 
            join station c on b.stationID = c.stationID
            where a.scheduleID = ${temp.scheduleID}
            order by stationOrder DESC
            LIMIT 1)
                
                `,
            (err, rows, fields) => {
              if (err) {
                console.log(err);
              } else {
                if (rows.length == 2) {
                  temp.startStationInfo = {
                    stationName: rows[0].stationName,
                    arrivalTime: rows[0].arrivalTime,
                    departureTime: rows[0].departureTime,
                  };
                  temp.endStationInfo = {
                    stationName: rows[1].stationName,
                    arrivalTime: rows[1].arrivalTime,
                    departureTime: rows[1].departureTime,
                  };

                  data.push(temp);
                  console.log(temp);
                }
              }
            }
          );
        });
      }
    }
  );

  //   query(
  //     `select * from schedule where frequency like "${dateFilter}"`,
  //     (err, response) => {
  //       if (err) {
  //         return res.status(401).send("Not found");
  //       } else {
  //         return res.status(200).send(JSON.stringify(response));
  //       }
  //     }
  //   );

  //   return res.send(JSON.stringify({ Today: dateFilter }));
});

module.exports = Router;
