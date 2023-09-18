const loansService = require("../services/loans.service");
function getLoanCalculation(req, res, next) {
  loansService
    .getLoanCalculation(req.query)
    .then((data) => res.send(data))
    .catch((error) => next(error));
}

function getLoans(req, res, next) {
  loansService
    .getLoans(req.query)
    .then((data) => res.send(data))
    .catch((error) => next(error));
}

function getCount(req, res, next) {
  loansService
    .getCount(req.query)
    .then((data) => res.send(data))
    .catch((error) => next(error));
}

function getUserActiveAppointment(req, res, next) {
  loansService
    .getUserActiveAppointment(req.query)
    .then((data) => res.send(data))
    .catch((error) => next(error));
}

function addLoanAppointment(req, res, next) {
  console.log(req.body);
  const passport_photo = req.files["passport_photo"];
  const visa_photo = req.files["visa_photo"];

  loansService
    .addLoanAppointment(
      Object.assign(req.body, {
        passport_photo,
        visa_photo,
      })
    )
    .then((data) => res.send(data))
    .catch((error) => next(error));
}

function changeLoanStatus(ctx) {
  return (req, res, next) => {
    loansService
      .changeLoanStatus(req.body, ctx)
      .then((data) => res.send(data))
      .catch((error) => next(error));
  };
}

module.exports = {
  getLoanCalculation,
  getUserActiveAppointment,
  addLoanAppointment,
  changeLoanStatus,
  getLoans,
  getCount,
};
