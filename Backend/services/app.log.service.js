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

<<<<<<< HEAD
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

=======
>>>>>>> 96834300a03f807878a28c3ec56f9a98c597b74f
module.exports = { insertAppLog };
