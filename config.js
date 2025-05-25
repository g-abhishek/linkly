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

  redis_db_url: {
    doc: "Redis DB.",
    format: String,
    default: "",
    env: "REDIS_DB_URL",
    arg: "redis_db_url",
  },
  postgres: {
    postgres_db_url: {
      doc: "Postgres DB.",
      format: String,
      default: "",
      env: "POSTGRES_DB_URL",
      arg: "postgres_db_url",
    },
    postgres_user: {
      doc: "Postgres User.",
      format: String,
      default: "",
      env: "POSTGRES_USER",
      arg: "postgres_user",
    },
    postgres_password: {
      doc: "Postgres User.",
      format: String,
      default: "",
      env: "POSTGRES_PASSWORD",
      arg: "postgres_password",
    },
    postgres_db: {
      doc: "Postgres DB.",
      format: String,
      default: "",
      env: "POSTGRES_DB",
      arg: "postgres_db",
    },
    postgres_host: {
      doc: "Postgres Host.",
      format: String,
      default: "",
      env: "POSTGRES_HOST",
      arg: "postgres_host",
    },
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
