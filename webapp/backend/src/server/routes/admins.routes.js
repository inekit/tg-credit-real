var express = require("express");
var router = express.Router();
var {
  login,
  register,
  authAdmin: auth,
  editUser: editAdmin,
} = require("../controllers/admin.authentication");
var AdminsController = require("../controllers/admin.controller");
var LoansController = require("../controllers/loans.controller");
var UsersController = require("../controllers/users.controller");
var MailingController = require("../controllers/mailing.controller");

var fileUpload = require("express-fileupload");
router.use(fileUpload({}));

module.exports = (ctx) => {
  router.get("/admins", auth, AdminsController.getAll);
  router.put("/admins", auth, editAdmin);
  router.delete("/admins", auth, AdminsController.adminDelete);

  router.get("/users", auth, UsersController.getUsers);
  router.put("/users", auth, UsersController.editUser);
  //router.post("/users", auth, UsersController.addUser);
  router.delete("/users", auth, UsersController.deleteUser);

  router.get("/loans", auth, LoansController.getLoans);
  router.put("/loans", auth, LoansController.changeLoanStatusAdmin(ctx));
  router.get("/loans_count", auth, LoansController.getCount);

  router.post("/mailing", auth, MailingController.add(ctx));

  router.get("/id", AdminsController.getId);

  router.post("/login", login.local);
  router.post("/register", register.local);
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
