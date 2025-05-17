const config = require("../config");

module.exports = {
  client: "pg",
  connection: config.get("postgres_db_url"),
};
