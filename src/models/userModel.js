const pool = require("../config/db");

const User = {
  create: async (username, hashedPassword) => {
    const query =
      "INSERT INTO users (username,password) VALUES ($1,$2) RETURNING *";
    const values = [username, hashedPassword];
    const res = await pool.query(query, values);
    return res.rows[0];
  },

  findByUsername: async (username) => {
    const query = "SELECT * FROM users WHERE username = $1";
    const res = await pool.query(query, [username]);
    return res.rows[0];
  },
};

module.exports = User;
