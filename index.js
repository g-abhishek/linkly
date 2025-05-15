const config = require("./config");
const getMainServer = require("./app/server");

const PORT = config.get("port") || 3000;

const app = getMainServer();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
