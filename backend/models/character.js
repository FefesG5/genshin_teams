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

// async function getAll() {
//   try {
//     const characters = await knex("characters").select();
//     return characters;
//   } catch (error) {
//     throw error;
//   }
// }

// function getById(id) {
//   return knex("characters").where({ id }).first();
// }

// function getByName(name) {
//   return knex("characters").where("name", "ilike", `%${name}%`);
// }

// function getByRegion(region) {
//   return knex("characters").where("region", "ilike", `%${region}$`);
// }

// function getByWeapon(weapon) {
//   return knex("characters").where("weapon", "ilike", `%${weapon}%`);
// }

// function getByElement(element) {
//   return knex("characters").where("element", "ilike", `%${element}$`);
// }

// function getByRarity(rarity) {
//   return knex("characters").where("rarity", "ilike", `%${rarity}%`);
// }

// module.exports = {
//   getAll,
//   getById,
//   getByName,
//   getByRegion,
//   getByWeapon,
//   getByElement,
//   getByRarity,
// };
