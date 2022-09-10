const { query } = require("../helpers/mysql.init");

async function getTicketPrice(scheduleID, startStation, endStation) {
  try {
    return await query(
      "select class,price from schedule s join ticketgroup tg on s.groupID = tg.groupID join ticketprices tp on tg.groupID=tp.groupID where scheduleID=? and station_1_ID=? and station_2_ID=?",
      [scheduleID, startStation, endStation]
    );
  } catch (e) {
    return e;
  }
}

module.exports = { getTicketPrice };
