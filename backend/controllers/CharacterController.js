const Character = require("../models/character");

async function getAllCharacters(req, res) {
  try {
    const characters = await Character.getAll();
    res.json(characters);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "getAllCharacters Error - Character Controller" });
  }
}

module.exports = {
  getAllCharacters,
};
