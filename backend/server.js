require("dotenv").config();

const express = require("express");
const knex = require("knex");
const knexConfig = require("./knexfile");

const port = process.env.PORT || 3000;

const app = express();
const db = knex(knexConfig.development);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Testing
app.get("/", (req, res) => {
  res.status(200).send({
    id: 53,
    name: "Noelle",
    element: "Geo",
    rarity: 4,
    weapon: "Claymore",
    description:
      "Noelle is a dedicated maid who serves the Knights of Favonius. With her Geo powers and unwavering determination, she strives to protect and heal her allies.",
    url: "https://genshin-impact.fandom.com/wiki/Noelle",
    image_url:
      "https://static.wikia.nocookie.net/gensin-impact/images/e/eb/Noelle_Card.png/revision/latest?cb=20220725205118",
    region: "Mondstadt",
  });
});

// -------------------------------- //

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
