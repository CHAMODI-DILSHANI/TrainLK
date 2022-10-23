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

Router.post("/group", async (req, res) => {
  // console.log(req.body);
  // res.send(req.body);
  const result = await ticketServices.addTicketGroups(req.body);
  if (result) {
    res.status(201).send({ groupID: result });
  } else {
    res.status(422).send();
  }
});

module.exports = Router;
