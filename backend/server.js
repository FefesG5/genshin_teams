require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Character = require("./models/character");
const User = require("./models/users");

const secretKey = process.env.JWT_SECRET_KEY;

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

// -------------------------- //
// TESTING
// LIVE SERVER LOGIC **NEED TO REFACTOR**
const knex = require("knex")({
  client: "pg",
  connection:
    // FOR LOCAL CONNECTIONS
    // {
    //   user: process.env.DB_USER,
    //   database: process.env.DB_NAME,
    //   port: process.env.DB_PORT,
    //   password: process.env.DB_PASSWORD,
    // },

    // FOR ONLINE CONNECTIONS
    {
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false,
      },
    },
});

app.get("/characters", (req, res) => {
  const { element, weapon, region, rarity } = req.query;

  let query = knex("characters").select();

  if (element) {
    query = query.where("element", element);
  }

  if (weapon) {
    query = query.where("weapon", weapon);
  }

  if (region) {
    query = query.where("region", region);
  }

  if (rarity) {
    query = query.where("rarity", rarity);
  }

  query
    .then((characters) => {
      res.json(characters);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});

app.get("/main_images/characters", (req, res) => {
  const { id, name } = req.query;

  let query = knex("character_images").select("main_url");

  if (id) {
    query = query.where("id", id);
  }

  if (name) {
    query = query.where("name", name);
  }

  query
    .then((characterImages) => {
      res.json(characterImages);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});

app.get("/icon_images/characters", (req, res) => {
  const { id, name } = req.query;

  let query = knex("character_images").select("icon_url");

  if (id) {
    query = query.where("id", id);
  }

  if (name) {
    query = query.where("name", name);
  }

  query
    .then((characterImages) => {
      res.json(characterImages);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});

app.get("/characters", (req, res) => {
  knex("characters")
    .select()
    .then((characters) => {
      res.json(characters);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});
app.get("/character/name/:name", (req, res) => {
  const name = req.params.name;

  knex("characters")
    .select()
    .where("name", name)
    .then((characters) => {
      res.json(characters);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});

app.get("/character/id/:id", (req, res) => {
  const id = req.params.id;

  knex("characters")
    .select()
    .where("id", id)
    .then((characters) => {
      res.json(characters);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});
// -------------------------- //
// USER LOGIC ONLINE **NEED TO REFACTOR**
// GET user by ID
app.get("/users/:id", (req, res) => {
  const id = req.params.id;

  knex("users")
    .select()
    .where("id", id)
    .then((users) => {
      res.json(users);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});

// GET user by username
app.get("/users/username/:username", (req, res) => {
  const username = req.params.username;

  knex("users")
    .select()
    .where("username", username)
    .then((users) => {
      res.json(users);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});

// POST request to create a new user
app.post("/users", (req, res) => {
  const { username, email, password } = req.body;

  // Hash the password using bcrypt
  bcrypt.hash(password, 10, (error, hashedPassword) => {
    if (error) {
      console.error("Error hashing password:", error);
      return res.sendStatus(500);
    }

    // Create a new user object with the hashed password
    const newUser = {
      username,
      email,
      password: hashedPassword,
    };

    // Insert the new user into the database
    knex("users")
      .insert(newUser)
      .then(() => {
        res.sendStatus(201);
      })
      .catch((error) => {
        console.error("Error creating new user:", error);
        res.sendStatus(500);
      });
  });
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Query database for user details
    const user = await knex("users")
      .select("id", "username", "password")
      .where({ username })
      .first();

    if (!user) {
      return res
        .status(401)
        .json({ error: "Invalid username or password - 1" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ error: "Invalid username or password - 2" });
    }

    const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: "1h" });

    res.json({ token });
  } catch (error) {
    console.error("Authentication error: ", error);
    res.status(500).json({ error: "Server error" });
  }
});

// DELETE user by ID
app.delete("/users/:id", (req, res) => {
  const id = req.params.id;

  knex("users")
    .where("id", id)
    .del()
    .then(() => {
      res.sendStatus(204);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});

// -------------------------------- //
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// LOCAL HOST
// GENSHIN CHARACTERS CRAP CODE BELOW//
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
