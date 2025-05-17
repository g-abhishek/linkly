const express = require("express");

const getMainServer = () => {
  const app = express();
  app.use(express.json());

  require("./routes")(app);

  app.get("/", (req, res) => {
    res.send("Welcome to Linkly!");
  });

  return app;
};

module.exports = getMainServer;
