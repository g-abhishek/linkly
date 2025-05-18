const { createRedisGetterSetter } = require("../common");
const { getCurrentCounterKey } = require("./keys");

module.exports = {
  currentCounter: (keyData) =>
    createRedisGetterSetter({
      keyGenerator: getCurrentCounterKey,
      keyData,
    }),
};
