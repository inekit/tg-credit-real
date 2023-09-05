var express = require("express");
var router = express.Router();
var LoansController = require("../controllers/loans.controller");
var UsersController = require("../controllers/users.controller");

module.exports = (ctx) => {
  router.get("/loan_calculation", LoansController.getLoanCalculation);
  router.get("/users", UsersController.getProfile);

  router.post("/loan", LoansController.addLoanAppointment);
  router.get("/loan", LoansController.getUserActiveAppointment);
  router.put("/loan", LoansController.changeLoanStatus);

  return router;
};
