const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const errorMiddleware = require("./middleware/error");
dotenv.config();
const cookieParser = require("cookie-parser");

const employee = require("./routes/createEmployee");
const user = require("./routes/createUser.js");

const app = express();
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", employee);
app.use("/api/v1", user);

app.use(errorMiddleware);

module.exports = app;
