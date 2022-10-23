const express = require("express");
const Router = express.Router();
const stationsService = require("../services/stations.service");

Router.get("/", async (req, resp) => {
  const result = await stationsService.getAllStations();
  resp.send(result);
  // resp.send({ message: "hi" });
});

module.exports = Router;
