const Knex = require("knex");
const { Model } = require("objection");
const config = require("../config");

const dbConnection = Knex({
  client: "pg",
  connection: config.get("postgres_db_url"),
});
Model.knex(dbConnection);

module.exports = dbConnection;
