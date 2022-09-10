const { query } = require("../helpers/mysql.init");

async function getItemsWithoutUser(type) {
  const result = await query(
    "select itemID,type,itemType,description,contactNo,timestamp,image from lostandfound where type = ? order by timestamp",
    [type]
  );
  return result;
}

async function insertItems(data) {
  try {
    const result = await query(
      "insert into lostandfound (userID,type, itemType,description,contactNo,image) values (?,?,?,?,?,?)",
      [
        data.userID,
        data.type,
        data.itemType,
        data.description,
        data.contactNo,
        data.image,
      ]
    );
    console.log(result);
    return result;
  } catch (e) {
    return e;
  }
}

async function removeItem(itemID) {
  try {
    const result = await query("delete from lostandfound where itemID = ?", [
      itemID,
    ]);
    return result;
  } catch (e) {
    return e;
  }
}

module.exports = { getItemsWithoutUser, insertItems, removeItem };
