const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ index: "Welcome to the Song Guessing Game" });
});

module.exports = app;
