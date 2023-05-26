const knex = require("knex");
const bcrypt = require("bcrypt");

exports.getUserById = async (req, res) => {
  console.log(req);
  const { id } = req.params;
  try {
    const user = await knex("users").where({ id }).first();
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal server error - getUserById - controller" });
  }
};

exports.createUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // Hash the password
    const hashPassword = await bcrypt.hash(password, 10);

    const [userId] = await knex("users").insert({
      username,
      email,
      password: hashPassword,
    });

    res.json({ id: userId, username, email });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal server error - createUser - userController" });
  }
};
