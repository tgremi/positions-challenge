const express = require("express");
const morgan = require("morgan");
const app = express();
const expressValidator = require("express-validator");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
// app.use(expressValidator());

module.exports = app;
