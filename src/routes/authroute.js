// backend/routes/authRoutes.js
const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Middleware
const authMiddleware = require("../middleware/authMiddleware");

// Routes
router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/protected", authMiddleware, (req, res) => {
  res.json({ message: "This is a protected route", user: req.user });
});

module.exports = router;
