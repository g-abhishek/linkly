const { CURRENT_COUNTER } = require("../prefix");

const getCurrentCounterKey = () => `${CURRENT_COUNTER}`;

module.exports = {
  getCurrentCounterKey,
};
