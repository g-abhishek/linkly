const { SHORT_CODE } = require("../prefix");

const getShortCodeKey = ({ short_code }) => `${SHORT_CODE}:${short_code}`;

module.exports = {
  getShortCodeKey,
};
