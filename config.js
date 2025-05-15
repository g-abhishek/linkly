const convict = require("convict");

const config = convict({
  env: {
    doc: "The application environment.",
    format: ["production", "development", "test"],
    default: "",
    env: "NODE_ENV",
  },
  port: {
    doc: "The port to bind.",
    format: "port",
    default: 3000,
    env: "PORT",
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
