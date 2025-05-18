const Hashids = require("hashids/cjs");
const { currentCounter } = require("../common/redis");
const SALT = "linkly";
const MIN_LENGTH = 6;

const hashids = new Hashids(SALT, MIN_LENGTH);

const getShortCode = async () => {
  const counter = await currentCounter().increment();
  return hashids.encode(counter);
};

module.exports = { getShortCode };
