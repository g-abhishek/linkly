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
    throw new Error("Invalid Server Type");
  }

  app.use((error, req, res, next) => {
    console.log(error);
    const status = error.status || 500;

    res.status(status).send({
      message: error?.message || "Internal Server Error",
    });
  });

  return app;
};

module.exports = getMainServer;
