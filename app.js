const express = require("express");

const app = express();

const getRandom = () => {
  return Math.floor(Math.random() * 10);
};

app.get("/", (req, res) => {
  const number = getRandom();
  res.send({ number });
});

app.listen(8080, () => {
  console.log("server is runing :>> ");
});

module.exports = { app, getRandom };
