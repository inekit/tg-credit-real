var express = require("express");
var router = express.Router();
var ItemsController = require("../controllers/items.controller");
var CategoriesController = require("../controllers/categories.controller");
var TagsController = require("../controllers/tags.controller");
var BasketsController = require("../controllers/baskets.controller");
var OrdersController = require("../controllers/orders.controller");

module.exports = (ctx) => {
  router.get("/items", ItemsController.getAll);

  router.get("/favorites", BasketsController.getFavorites);
  router.post("/favorites", BasketsController.addFavorite);
  router.put("/favorites", BasketsController.editFavorite);
  router.delete("/favorites", BasketsController.deleteFavorite);

  router.get("/basket_data", BasketsController.getBasketData);
  router.post("/orders", OrdersController.addOne);

  router.get("/categories", CategoriesController.getAll);

  router.get("/tags", TagsController.getAll);

  return router;
};
