var express = require("express");
var router = express.Router();
var ItemsController = require("../controllers/items.controller");

var fileUpload = require("express-fileupload");
router.use(fileUpload({}));

module.exports = (ctx) => {
  router.get("/items", ItemsController.get(ctx));
  router.get("/files", ItemsController.getFiles(ctx));

  return router;
};
