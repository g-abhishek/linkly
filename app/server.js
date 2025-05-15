const express = require("express");
const config = require("../config");

const getMainServer = () => {
  const app = express();
  require("./routes")(app);

  app.get("/", (req, res) => {
    res.send("Welcome to Linkly!");
  });

  return app;
};

module.exports = getMainServer;
