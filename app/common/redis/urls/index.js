const { createRedisGetterSetter } = require("../common");
const { getShortCodeKey } = require("./keys");

module.exports = {
  shortCode: (keyData) =>
    createRedisGetterSetter({
      keyGenerator: getShortCodeKey,
      keyData,
    }),
};
