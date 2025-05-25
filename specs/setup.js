const dbConnection = require("../connections/postgres.init");
const redis = require("../connections/redis.init");

beforeAll(() => {
  console.log("beforeAll:started");
  console.log("beforeAll:completed");
});
afterAll(() => {
  console.log("afterAll:started");
  redis.quit();
  dbConnection.destroy();
  console.log("afterAll:completed");
});
