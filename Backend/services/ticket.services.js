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

async function addTicketGroups(data) {
  try {
    query("begin");
    const createGroup = await query(
      "insert into ticketgroup(routeName) values (?)",
      [data.routeName]
    );
    const groupID = createGroup.insertId;
    // console.log(data.ticketPrices);
    await data.ticketPrices.forEach(async (x) => {
      // console.log(x);
      await query(
        "insert into ticketprices( groupID,station_1_ID,station_2_ID,class,price) values(?,?,?,?,?)",
        [groupID, x.station_1_ID, x.station_2_ID, x.class, x.price]
      );
    });
    query("commit");
    return groupID;
  } catch (e) {
    query("rollback");
    return false;
  }
}

module.exports = { getTicketPrice, addTicketGroups };
