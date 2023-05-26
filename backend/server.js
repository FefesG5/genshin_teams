require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const knex = require("knex");
const Character = require("./models/character");

app.get("/", (req, res) => {
  res.status(200).send("hello");
});

// -------------------------------- //
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

app.get("/characters", async (req, res) => {
  try {
    const characters = await Character.getAllCharacters();
    res.json(characters);
  } catch (error) {
    console.error("Error retrieving characters:", error);
    res.status(500).json({ error: "Failed to retrieve characters" });
  }
});

app.get("/characters/:id", async (req, res) => {
  try {
    const characterId = req.params.id;
    const character = await Character.getCharacterById(characterId);
    if (!character) {
      return res.status(404).json({ error: "Character not found" });
    }
    res.json(character);
  } catch (error) {
    console.error("Error retrieving character:", error);
    res.status(500).json({ error: "Failed to retrieve character" });
  }
});

app.get("/characters/name/:name", async (req, res) => {
  try {
    const characterName = req.params.name;
    const character = await Character.getCharacterByName(characterName);
    if (!character) {
      return res.status(404).json({ error: "Character not found" });
    }
    res.json(character);
  } catch (error) {
    console.error("Error retrieving character:", error);
    res.status(500).json({ error: "Failed to retrieve character" });
  }
});
app.get("/characters/element/:element", async (req, res) => {
  try {
    const element = req.params.element;
    const characters = await Character.getCharactersByElement(element);
    if (characters.length === 0) {
      return res
        .status(404)
        .json({ error: "No characters found for the specified element" });
    }
    res.json(characters);
  } catch (error) {
    console.error("Error retrieving characters:", error);
    res.status(500).json({ error: "Failed to retrieve characters" });
  }
});

// Get characters by region
app.get("/characters/region/:region", async (req, res) => {
  try {
    const region = req.params.region;
    const characters = await Character.getCharactersByRegion(region);
    if (characters.length === 0) {
      return res
        .status(404)
        .json({ error: "No characters found for the specified region" });
    }
    res.json(characters);
  } catch (error) {
    console.error("Error retrieving characters:", error);
    res.status(500).json({ error: "Failed to retrieve characters" });
  }
});

// Get characters by weapon
app.get("/characters/weapon/:weapon", async (req, res) => {
  try {
    const weapon = req.params.weapon;
    const characters = await Character.getCharactersByWeapon(weapon);
    if (characters.length === 0) {
      return res
        .status(404)
        .json({ error: "No characters found for the specified weapon" });
    }
    res.json(characters);
  } catch (error) {
    console.error("Error retrieving characters:", error);
    res.status(500).json({ error: "Failed to retrieve characters" });
  }
});
