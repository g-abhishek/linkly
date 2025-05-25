const config = require("../config");

const dbURL =
  config.get("postgres.postgres_db_url") ||
  `postgres://${config.get("postgres.postgres_user")}:${config.get("postgres.postgres_password")}@${config.get("postgres.postgres_host")}:5432/${config.get("postgres.postgres_db")}`;

module.exports = {
  client: "pg",
  connection: dbURL,
};
