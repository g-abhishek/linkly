const config = require("./config");
const getMainServer = require("./app/server");

const PORT = config.get("port");
const SERVER_TYPE = config.get("server_type");
console.log("config >>>>", config.getProperties());

const app = getMainServer(SERVER_TYPE);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
