const express = require("express");
const Router = express.Router();
const ticketServices = require("../services/ticket.services");

Router.get("/:scheduleID/:startStation/:endStation", async (req, res) => {
  res.send(
    await ticketServices.getTicketPrice(
      req.params.scheduleID,
      req.params.startStation,
      req.params.endStation
    )
  );
});

Router.post("/", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

module.exports = Router;
