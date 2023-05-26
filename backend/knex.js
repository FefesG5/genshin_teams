require("dotenv").config();
const knex = require("knex");
const knexfile = require("./knexfile");

const environment = process.env.NODE_ENV || "development"; //|| "production";
const config = knexfile[environment];

const knexInstance = knex(config);

module.exports = knexInstance;
