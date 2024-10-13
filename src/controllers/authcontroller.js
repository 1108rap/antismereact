const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authcontroller = {
  register: async (res, req) => {
    const { username, password } = req.body;

    try {
        const existingUser = await User
    }
  },
};
