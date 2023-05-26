require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const cors = require("cors");
const Character = require("./models/character");
const User = require("./models/users");

// Middleware
app.use(express.json());
app.use(cors());

// app.use(cors({
//   methods: ['GET', 'PUT'],
//   origin: '*'
// }));

app.get("/", (req, res) => {
  res.status(200).send("This is backend side. Under contruction...");
});

// -------------------------------- //
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// GENSHIN CHARACTERS //
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
// -------------------------------- //

// USERS
app.post("/users", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = await User.createUser(username, email, password);
    res.json(newUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Failed to create user" });
  }
});

// Get user by ID
app.get("/users/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.getUserById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error("Error retrieving user:", error);
    res.status(500).json({ error: "Failed to retrieve user" });
  }
});

// Get user by name
app.get("/users/username/:username", async (req, res) => {
  try {
    const username = req.params.username;
    const user = await User.getUserByName(username);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error("Error retrieving user:", error);
    res.status(500).json({ error: "Failed to retrieve user" });
  }
});

// Get user by email
app.get("/users/email/:email", async (req, res) => {
  try {
    const userEmail = req.params.email;
    const user = await User.getUserByEmail(userEmail);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error("Error retrieving user:", error);
    res.status(500).json({ error: "Failed to retrieve user" });
  }
});
// -------------------------------- //
