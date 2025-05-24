const express = require("express");

const getMainServer = () => {
  const app = express();
  app.use(express.json());

  require("./routes")(app);

  app.get("/", (req, res) => {
    console.log("instance >>>", process.env.INSTANCE_NAME);
    res.send("Welcome to Linkly!");
  });

  return app;
};

module.exports = getMainServer;
