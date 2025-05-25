const supertest = require("supertest");
const getMainServer = require("../app/server");
require("../connections/postgres.init");
const servers = {};

module.exports = (serverType) => {
  if (!servers[serverType]) {
    const app = getMainServer(serverType);
    // app = app.listen(0);

    const request = supertest(app);
    servers[serverType] = request;
  }

  return servers[serverType];
};
