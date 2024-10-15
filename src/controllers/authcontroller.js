const { message } = require("antd");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authcontroller = {
  register: async (res, req) => {
    const { username, password } = req.body;

    try {
      // Username Existing Check
      const existingUser = await User.findByUsername(username);
      if (existingUser) {
        return res.status(400).json({ message: "User already exist" });
      }

      // Hash Password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Create New Users
      const newUser = await User.create(username, hashedPassword);

      res.status(201).json({ message: "User Create", user: newUser });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  },

  login: async (req, res) => {
    const { username, password } = req.body;

    try {
      // Search User by Username
      const user = await User.findByUsername(username);
      if (!user) {
        return res.status(400).json({ message: "Invalid Credentials" });
      }

      // Check Password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid Credentials" });
      }

      //JWT Create
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: "1h" },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error");
    }
  },
};

module.exports = authcontroller;
