const express = require("express");
const cors = require("cors");
const { message } = require("antd");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// end point API
app.get("/api", (res, req) => {
  res.json({ message: "Hello from API" });
});

// Jalankan Server
app.listen(PORT, () => {
  console.log(`Server Berjalan di port ${PORT}`);
});
