const knex = require("knex");
const { development: dbConfig } = require("../knexfile");
const bcrypt = require("bcrypt");

const db = knex(dbConfig);

async function createUser(username, email, password) {
  try {
    // HASH the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await db("users")
      .insert({ username: username, email: email, password: hashedPassword })
      .returning("*");
    return newUser;
  } catch (error) {
    throw error;
  }
}

async function getUserById(id) {
  try {
    const user = await db("users").where("id", id).first();
    return user;
  } catch (error) {
    throw error;
  }
}

async function getUserByName(username) {
  try {
    const user = await db("users").where("username", username).first();
    return user;
  } catch (error) {
    throw error;
  }
}

async function getUserByEmail(email) {
  try {
    const user = await db("users").where("email", email).first();
    return user;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createUser,
  getUserById,
  getUserByName,
  getUserByEmail,
};
