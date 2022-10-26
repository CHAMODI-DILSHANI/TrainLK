const { query } = require("../helpers/mysql.init");

async function insertAppLog(data) {
  try {
    await query("insert into userAppUsage(userID,time) values (?,?)", [
      data.userID,
      data.time,
    ]);
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
}

async function getAllUserLogs(userID) {
  try {
    const result = await query(
      "select sum(time),userID from userAppUsage uau group by userID where userID = ?",
      [userID]
    );
    return result;
  } catch (e) {
    console.error(e);
    return false;
  }
}

module.exports = { insertAppLog };
