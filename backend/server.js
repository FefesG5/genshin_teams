const express = require("express");
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Testing
app.get("/", (req, res) => {
  res.status(200).send("Hello");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
