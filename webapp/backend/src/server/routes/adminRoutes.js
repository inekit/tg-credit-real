var express = require("express");
var router = express.Router();
var {
  login,
  register,
  authAdmin: auth,
} = require("../controllers/user.authentication");
var UsersController = require("../controllers/user.controller");
var ChannelsController = require("../controllers/channels.controller");
var CategoriesController = require("../controllers/categories.controller");
var MailingController = require("../controllers/mailing.controller");

var fileUpload = require("express-fileupload");
router.use(fileUpload({}));

module.exports = (ctx) => {
  router.get("/users", auth, UsersController.getAll);
  router.delete("/users", auth, UsersController.adminDelete);

  router.get("/items", auth, ChannelsController.getAll);
  router.post("/items", auth, ChannelsController.addOne);
  router.put("/items", auth, ChannelsController.editOne);
  router.delete("/items", auth, ChannelsController.deleteOne);

  router.get("/categories", CategoriesController.getAll);

  router.post("/categories", auth, CategoriesController.addOne);
  router.put("/categories", auth, CategoriesController.editOne);
  router.delete("/categories", auth, CategoriesController.deleteOne);

  router.post("/mailing", auth, MailingController.add(ctx));

  router.post("/login", login.local);
  router.put("/register", register.local);
  router.get("/logout", auth, (req, res) => {
    req.logout(function (err) {
      if (err) {
        return next(err);
      }

      return res.send(
        JSON.stringify({ isAuthenticated: req.isAuthenticated() })
      );
    });
  });

  return router;
};
