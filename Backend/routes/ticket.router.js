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

module.exports = Router;
