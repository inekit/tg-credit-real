var express = require("express");
var router = express.Router();
var LoansController = require("../controllers/loans.controller");
var UsersController = require("../controllers/users.controller");

module.exports = (ctx) => {
  router.get("/loan_calculation", LoansController.getLoanCalculation);
  router.get("/users", UsersController.getProfile);

  router.post("/loans", LoansController.addLoanAppointment);
  router.get("/loans", LoansController.getUserActiveAppointment);
  router.put("/loans", LoansController.changeLoanStatus);

  return router;
};
