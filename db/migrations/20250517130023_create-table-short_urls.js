exports.up = function (knex) {
  return knex.schema.createTable("short_urls", (table) => {
    table.increments("id").primary();
    table.text("original_url").notNullable();
    table.string("short_code").notNullable().unique();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
    table.timestamp("created_by");
    table.timestamp("expires_at").nullable();
    table.integer("count").defaultTo(0);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("short_urls");
};
