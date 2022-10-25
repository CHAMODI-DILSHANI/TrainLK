const { query } = require("../helpers/mysql.init");

async function getAllNews() {
  try {
    const result = await query(
      "select newsID,userID,title,description,timestamp,concat(firstName,' ',lastName) as user from news n join users u on n.userID=u.id order by timestamp desc"
    );
    return result;
  } catch (e) {
    return e;
  }
}

async function updateNews(data) {
  try {
    const result = await query(
      "update news set title = ?,description=? where newsID = ? ",
      [data.title, data.description, data.newsID]
    );
    return true;
  } catch (e) {
    console.log("error : " + e);
    return false;
  }
}

module.exports = { getAllNews, updateNews };
