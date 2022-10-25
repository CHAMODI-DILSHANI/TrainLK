const { query } = require("../helpers/mysql.init");

async function getAllNews() {
  const result = await query(
    "select newsID,userID,title,description,timestamp,concat(firstName,' ',lastName) as user from news n join users u on n.userID=u.id order by timestamp desc"
  );
  return result;
}

module.exports = { getAllNews };
