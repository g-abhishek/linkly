const Hashids = require("hashids/cjs");
const SALT = "linkly";
const MIN_LENGTH = 6;

const hashids = new Hashids(SALT, MIN_LENGTH);
console.log("hashids object test");

const getShortCode = (id) => {
  return hashids.encode(id);
};

module.exports = { getShortCode };
