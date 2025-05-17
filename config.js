const convict = require("convict");

const config = convict({
  env: {
    doc: "The application environment.",
    format: String,
    default: "development",
    env: "NODE_ENV",
    arg: "node_env",
  },
  port: {
    doc: "The port to bind.",
    format: "port",
    default: 3000,
    env: "PORT",
  },
  postgres_db_url: {
    doc: "Postgres DB.",
    format: String,
    default: "",
    env: "POSTGRES_DB_URL",
    arg: "postgres_db_url",
  },
});

config.validate({ allowed: "strict" });

module.exports = config;

/**
 * 🔍 What does config.validate() do?
 *  validate() checks that:
 *  All values in your config match the types/formats defined in your schema (e.g., port, url, etc.).
 *  All required fields are present.
 *  No unknown fields are present (when using allowed: 'strict').
 */
