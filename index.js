const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Pool } = require("pg");
const { default: Password } = require("antd/es/input/Password");
const { message } = require("antd");

const app = express();
const pool = new Pool({
  user: "postge",
  host: "127.0.0.1",
  database: "antisme",
  Password: "root",
  port: "5432",
});

app.use(bodyParser.json());

//Fungsi Login
