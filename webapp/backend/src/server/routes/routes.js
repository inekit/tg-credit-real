var express = require("express");
var router = express.Router();
var ChannelsController = require("../controllers/channels.controller");
var CategoriesController = require("../controllers/categories.controller");
var BasketsController = require("../controllers/baskets.controller");

module.exports = (ctx) => {
  router.get("/items", ChannelsController.getAll);

  router.get("/favorites", BasketsController.getFavorites);
  router.post("/favorites", BasketsController.addFavorite);
  router.delete("/favorites", BasketsController.deleteFavorite);

  router.get("/categories", CategoriesController.getAllWithItems);

  return router;
};
