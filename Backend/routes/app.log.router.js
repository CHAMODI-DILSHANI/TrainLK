const express = require("express");
const Router = express.Router();
const AppLogService = require("../services/app.log.service");

Router.post("/", (req, res) => {
  // console.log(req.body);
  // res.send();
  if (AppLogService.insertAppLog(req.body)) {
    res.status(204).send();
  } else {
    res.status(400).send();
  }
});

module.exports = Router;
