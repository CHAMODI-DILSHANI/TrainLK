const { query } = require("../helpers/mysql.init");

async function getItemsWithoutUser(type) {
  try {
    const result = await query(
      "select itemID,type,itemType,description,contactNo,timestamp,image from lostandfound where type = ? order by timestamp",
      [type]
    );
    return result;
  } catch (e) {
    return e;
  }
}

async function getAllItems() {
  try {
    const result = await query(
      "select itemID,userID,type,itemType,description,contactNo,timestamp,image,concat(firstName,' ',lastName) as user from lostandfound l join users u on l.userID=u.id order by timestamp desc"
    );
    return result;
  } catch (e) {
    return e;
  }
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

async function updateItems(data) {
  try {
    const result = await query(
      "update lostandfound set type=?, itemType=?,description=? where itemID = ?",
      [data.type, data.itemType, data.description, data.itemID]
    );
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

module.exports = {
  getItemsWithoutUser,
  insertItems,
  removeItem,
  getAllItems,
  updateItems,
};
