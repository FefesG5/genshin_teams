const knex = require("knex");
const { development: dbConfig } = require("../knexfile");

const db = knex(dbConfig);

async function getAllCharacters() {
  try {
    const characters = await db.select().from("characters");
    return characters;
  } catch (error) {
    throw error;
  }
}

async function getCharacterById(id) {
  try {
    const character = await db
      .select()
      .from("characters")
      .where("id", id)
      .first();
    return character;
  } catch (error) {
    throw error;
  }
}

async function getCharacterByName(name) {
  try {
    const character = await db
      .select()
      .from("characters")
      .where("name", name)
      .first();
    return character;
  } catch (error) {
    throw error;
  }
}

async function getCharactersByElement(element) {
  try {
    const characters = await db
      .select()
      .from("characters")
      .where("element", element);
    return characters;
  } catch (error) {
    throw error;
  }
}

async function getCharactersByRegion(region) {
  try {
    const characters = await db
      .select()
      .from("characters")
      .where("region", region);
    return characters;
  } catch (error) {
    throw error;
  }
}

async function getCharactersByWeapon(weapon) {
  try {
    const characters = await db
      .select()
      .from("characters")
      .where("weapon", weapon);
    return characters;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllCharacters,
  getCharacterById,
  getCharacterByName,
  getCharactersByElement,
  getCharactersByRegion,
  getCharactersByWeapon,
};
