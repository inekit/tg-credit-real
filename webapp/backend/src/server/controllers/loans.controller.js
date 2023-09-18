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
  console.log(req.body, req.files);
  const passportPhotoBinary = req.files?.["passport_photo"];
  const visaPhotoBinary = req.files?.["visa_photo"];

  loansService
    .addLoanAppointment(
      Object.assign(req.body, {
        passportPhotoBinary,
        visaPhotoBinary,
      })
    )
    .then((data) => res.send(data))
    .catch((error) => next(error));
}

function changeLoanStatus(ctx) {
  return (req, res, next) => {
    console.log("userobj", req.session.passport.user.toString());

    loansService
      .changeLoanStatus(
        Object.assign(req.body, {
          admin_id: req.session.passport.user.toString(),
        }),
        false,
        ctx
      )
      .then((data) => res.send(data))
      .catch((error) => next(error));
  };
}

function changeLoanStatusAdmin(ctx) {
  return (req, res, next) => {
    loansService
      .changeLoanStatus(req.body, true, ctx)
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
  changeLoanStatusAdmin,
  getCount,
};
