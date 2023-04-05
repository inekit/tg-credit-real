var express = require("express");
var router = express.Router();
var ItemsController = require("../controllers/items.controller");
var CategoriesController = require("../controllers/categories.controller");
var TagsController = require("../controllers/tags.controller");

module.exports = (ctx) => {
  router.get("/posts", ItemsController.getAll);

  router.get("/categories", CategoriesController.getAll);

  router.get("/tags", TagsController.getAll);

  return router;
};
