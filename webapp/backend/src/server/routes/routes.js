var express = require("express");
var router = express.Router();
var ItemsController = require("../controllers/items.controller");
var CategoriesController = require("../controllers/categories.controller");
var BasketsController = require("../controllers/baskets.controller");
var OrdersController = require("../controllers/orders.controller");
var DeliveryController = require("../controllers/delivery.controller");
var PromosController = require("../controllers/promos.controller");
var StaticsController = require("../controllers/statics.controller");

module.exports = (ctx) => {
  router.get("/items", ItemsController.getAll);

  router.get("/favorites", BasketsController.getFavorites);
  router.post("/favorites", BasketsController.addFavorite);
  router.put("/favorites", BasketsController.editFavorite);
  router.delete("/favorites", BasketsController.deleteFavorite);

  router.get("/basket_data", BasketsController.getBasketData);
  router.post("/orders", OrdersController.addOne(ctx));
  router.get("/can_order", OrdersController.canOrder);

  router.get("/delivery_price", DeliveryController.get);

  router.get("/categories", CategoriesController.getAll);

  router.put("/promos", PromosController.use);
  router.get("/promos", PromosController.test);

  router.get("/statics", StaticsController.getOne);

  return router;
};
