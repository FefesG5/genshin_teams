/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("characters", function (table) {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("element");
    table.integer("rarity").notNullable();
    table.string("weapon").notNullable();
    table.string("description").notNullable();
    table.string("url");
    table.string("image_url");
    table.string("region").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("characters");
};
