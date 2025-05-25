const config = require("./config");
require("./connections/postgres.init");
const getMainServer = require("./app/server");

const PORT = config.get("port");
console.log("config >>>>", config.getProperties());

const app = getMainServer();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
