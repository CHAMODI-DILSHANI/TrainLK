const express = require("express");
const Router = express.Router();
const { query } = require("../helpers/mysql.init");

Router.get("/", async (req, resp) => {
  const result = await getAllStations();
  resp.send(result);
});

async function getAllStations() {
  return await query("select stationID,stationName from station");
}

module.exports = Router;
