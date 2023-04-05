const express = require("express");

const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { spawnSync } = require("child_process");
const router = require("./routes/routes");
//const cron = new Cron();
var app = require("./app-preferences");

app.use(
  cors({
    origin: [
      "http://127.0.0.1:3040",
      "http://localhost:3040",
      "https://980.ru/",
    ],
    credentials: true,
  })
);
app.use("/colorsserver/public", express.static("public"));

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

module.exports = (ctx) => {
  app.use("/colorsserver/api", router(ctx));

  app.use(function (req, res, next) {
    const err = new Error("Страница не найдена!");
    err.status = 404;
    next(err);
  });

  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err,
    });
  });

  const host = "127.0.0.1";
  const port = process.env.SERVER_PORT ?? 3006;
  let server = app.listen(port, host, () =>
    console.log(`Server listens http://${host}:${port}`)
  );

  server.on("error", (err) => {
    console.log("err", err);

    const child = spawnSync("sudo", ["killall", "-9", "node"]);
    if (child.error) console.log(child.error);
  });
};
