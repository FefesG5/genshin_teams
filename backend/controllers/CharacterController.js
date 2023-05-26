const Character = require("../models/character");

// async function getAllCharacters(req, res) {
//   try {
//     const characters = await Character.getAll();
//     res.json(characters);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Failed to retrieve characters" });
//   }
// }

// async function getCharacterById(req, res) {
//   try {
//     const { id } = req.params;
//     const character = await Character.getById(id);
//     res.json(character);
//   } catch {
//     res
//       .status(500)
//       .json({ error: "getCharacterById Error - Character Controller" });
//   }
// }

// module.exports = {
//   getAllCharacters,
//   getCharacterById,
// };
