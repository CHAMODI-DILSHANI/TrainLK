const express = require("express");
const Router = express.Router();
const itemsService = require("../services/items.service");

Router.get("/:type", async (req, resp) => {
  const result = await itemsService.getItemsWithoutUser(req.params.type);
  resp.send(result);
});

Router.post("/", async (req, resp) => {
  const result = await itemsService.insertItems(req.body);
  resp.send(result);
});

Router.delete("/:id", async (req, resp) => {
  const result = await itemsService.removeItem(req.params.id);
  resp.send(result);
});

module.exports = Router;
