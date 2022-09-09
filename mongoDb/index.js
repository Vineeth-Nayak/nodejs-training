const express = require("express");
const router = express.Router();

const databaseConnect = require("./config/dbConn");

const userRouter = require("./routes/");
