const { Client } = require("pg");

async function testConnection() {
  const client = new Client({
    user: "postgres",
    database: "genshin_teams",
    password: "test",
  });

  try {
    await client.connect();
    console.log("Connection to the database successful.");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  } finally {
    await client.end();
  }
}

testConnection();
