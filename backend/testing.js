const knex = require("knex");
const knexConfig = require("./knexfile");

async function testConnection() {
  try {
    const db = knex(knexConfig.development);
    await db.raw("SELECT 1");
    console.log("Connection to the database successful.");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}

testConnection();
