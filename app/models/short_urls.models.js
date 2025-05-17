const { Model } = require("objection");

class ShortUrls extends Model {
  static get tableName() {
    return "short_urls";
  }

  static get idColumn() {
    return "id";
  }

  static async create({ data }) {
    return await this.query().insert(data);
  }

  static async getByCode({ short_code }) {
    return await this.query().where({ short_code: short_code }).first();
  }
}

module.exports = ShortUrls;
