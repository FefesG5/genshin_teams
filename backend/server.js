require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
// const knex = require("knex");
// const knexConfig = require("./knexfile");

const UserController = require("./controllers/UserController");
const CharacterController = require("./controllers/CharacterController");

const port = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// User routes
app.get("/characters", CharacterController.getAllCharacters);

// Testing
// app.get("/", (req, res) => {
//   res.status(200).send({
//     id: 53,
//     name: "Noelle",
//     element: "Geo",
//     rarity: 4,
//     weapon: "Claymore",
//     description:
//       "Noelle is a dedicated maid who serves the Knights of Favonius. With her Geo powers and unwavering determination, she strives to protect and heal her allies.",
//     url: "https://genshin-impact.fandom.com/wiki/Noelle",
//     image_url:
//       "https://static.wikia.nocookie.net/gensin-impact/images/e/eb/Noelle_Card.png/revision/latest?cb=20220725205118",
//     region: "Mondstadt",
//   });
// });
//-------------------------------- //

app.get("/", (req, res) => {
  res.status(200).send("hello");
});

// -------------------------------- //
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
