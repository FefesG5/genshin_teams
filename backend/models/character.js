const knex = require("../knex");

function getAll() {
  return knex("characters").select();
}

module.exports = {
  getAll,
};
