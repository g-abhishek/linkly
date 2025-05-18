const redis = require("../../../connections/redis.init");

const createRedisGetterSetter = ({ keyGenerator, keyData }) => {
  const key = keyGenerator(keyData);

  return {
    get: async () => {
      const result = await redis.get(key);
      if (result) {
        console.log("Data found in redis");
        return JSON.parse(result);
      }

      return result;
    },
    set: async (data) => {
      console.log("setting data in redis");
      return await redis.set(key, JSON.stringify(data));
    },
    increment: async () => {
      return await redis.incr(key);
    },
  };
};

module.exports = {
  createRedisGetterSetter,
};
