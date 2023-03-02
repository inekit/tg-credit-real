var express = require("express");
var router = express.Router();
var ItemsController = require("../controllers/items.controller");
var ImagesController = require("../controllers/images.controller");

var fileUpload = require("express-fileupload");
router.use(fileUpload({}));

module.exports = (ctx) => {
  router.get("/items", ItemsController.getItems(ctx));
  router.get("/favorites", ItemsController.getFavorites(ctx));
  router.put("/favorites", ItemsController.addFavorite);
  router.delete("/favorites", ItemsController.deleteFavorite);

  router.get("/img/:city_id/:object_id/:img_id", ImagesController.get);
  router.get("/files", ItemsController.getFiles(ctx));

  return router;
};
