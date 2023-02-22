const express = require("express");
const addDays = require("date-fns/addDays");

const app = express();

const handler = (request, response) => {
  let result = addDays(new Date(), 100);
  let format = `${result.getDate()}/${
    result.getMonth() + 1
  }/${result.getFullYear()}`;

  response.send(format);
};
app.get("/", handler);

module.exports = app;
