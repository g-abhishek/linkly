const express = require("express");
const config = require("./config");
const urlRouter = require("./routes/urls.routes");

const app = express();
const PORT = config.get("port") || 3000;

require("./routes")(app);

app.get("/", (req, res) => {
  res.send("Welcome to Linkly!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
