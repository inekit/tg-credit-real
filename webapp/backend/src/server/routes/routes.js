var express = require("express");
var router = express.Router();
var ItemsController = require("../controllers/items.controller");
var CategoriesController = require("../controllers/categories.controller");
var TagsController = require("../controllers/tags.controller");

module.exports = (ctx) => {
  router.get("/items", ItemsController.getAll);

  router.get("/favorites", ItemsController.getFavorites);
  router.put("/favorites", ItemsController.addFavorite);
  router.delete("/favorites", ItemsController.deleteFavorite);

  router.get("/categories", CategoriesController.getAll);

  router.get("/tags", TagsController.getAll);

  return router;
};
