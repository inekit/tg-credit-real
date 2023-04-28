const express = require("express");
const app = express();

const session = require("express-session");
var sessionConnection = require("../db/sessionConnection").sessionConnection();
const MySQLStore = require("express-mysql-session")(session);
const pgSession = require("express-pg-session")(session);
const {
  errorLogger,
  errorResponder,
  invalidPathHandler,
  failSafeHandler,
} = require("./middlewares/errorMiddleware");
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(
  cors({
    origin: [
      "http://127.0.0.1:8080",
      "http://127.0.0.1:3040",
      "http://localhost:3040",
      "https://188.225.83.97",
      "https://fotodesire.ru/",
    ],
    credentials: true,
  })
);
app.use(cookieParser());

var sessionStore = new pgSession({
  pool: sessionConnection,
  tableName: "session",
  columnNames: {
    sid: "session_id",
    expire: "expires",
    sess: "data",
    session_id: "sid",
    expires: "expire",
    data: "sess",
  },

  //expiration: 10800000,
  //createDatabaseTable: true,
});

app.set("trust proxy", 1);

app.use(
  session({
    secret: "12345",
    store: sessionStore,
    cookie: {
      //path: "/",
      //httpOnly: true,
      //resave: true,
      //maxAge: 60 * 60 * 1000,
      //secure: true,
    },
    resave: true,
    saveUninitialized: true,
  })
);

app.use(errorLogger);
app.use(errorResponder);
app.use(failSafeHandler);
//app.use(invalidPathHandler);

module.exports = app;
