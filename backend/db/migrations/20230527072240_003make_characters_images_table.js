/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("character_images", function (table) {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("main_url").notNullable();
    table.string("icon_url").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("character_images");
};
