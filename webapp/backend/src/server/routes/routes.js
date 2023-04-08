var express = require("express");
var router = express.Router();
var ItemsController = require("../controllers/items.controller");
var CategoriesController = require("../controllers/categories.controller");
var TagsController = require("../controllers/tags.controller");
var BasketsController = require("../controllers/baskets.controller");

module.exports = (ctx) => {
  router.get("/items", ItemsController.getAll);

  router.get("/favorites", auth, BasketsController.getFavorites);
  router.post("/favorites", auth, BasketsController.addFavorite);
  router.put("/favorites", auth, BasketsController.editFavorite);
  router.delete("/favorites", auth, BasketsController.deleteFavorite);

  router.get("/categories", CategoriesController.getAll);

  router.get("/tags", TagsController.getAll);

  return router;
};
