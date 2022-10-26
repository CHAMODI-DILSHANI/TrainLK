const e = require("express");
const express = require("express");
const Router = express.Router();
const itemsService = require("../services/items.service");
const newsService = require("../services/news.service");

Router.get("/:type", async (req, resp) => {
  const result = await itemsService.getItemsWithoutUser(req.params.type);
  resp.send(result);
});

Router.get("/", async (req, resp) => {
  const lfresult = await itemsService.getAllItems();
  const newsresult = await newsService.getAllNews();
  resp.send({ lostandFound: lfresult, news: newsresult });
});

Router.post("/", async (req, resp) => {
  const result = await itemsService.insertItems(req.body);
  resp.send(result);
});

Router.post("/news", async (req, res) => {
  const result = await newsService.addNews(req.body);
  res.send(result);
});

Router.delete("/news/:id", async (req, resp) => {
  if (await newsService.deleteNews(req.params.id)) {
    resp.status(204).send();
  } else {
    resp.status(400).send();
  }
});

Router.delete("/:id", async (req, resp) => {
  const result = await itemsService.removeItem(req.params.id);
  resp.send(result);
});

Router.put("/:news", async (req, resp) => {
  if (await newsService.updateNews(req.body)) {
    resp.status(204).send();
  } else {
    resp.status(400).send();
  }
});

Router.put("/", async (req, resp) => {
  const result = await itemsService.updateItems(req.body);
  console.log(result);
  if (result) {
    console.log(true);
    resp.status(204).send();
  } else {
    resp.status(400).send();
  }
});

module.exports = Router;
