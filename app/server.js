const express = require("express");

const getMainServer = (serverType) => {
  const app = express();
  app.use(express.json());

  app.get("/", (req, res) => {
    res.send("Welcome to Linkly!");
  });

  if (serverType === "main") {
    require("./routes")(app);
  } else {
    throw new Error("Invalid Server Type", serverType);
  }

  return app;
};

module.exports = getMainServer;
