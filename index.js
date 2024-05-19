const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

//dotenv
require("dotenv").config();

//middleware
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

//database connection
mongoose
  .connect(process.env.MONGOOSE_URI)
  .then(() => {
    console.log("MongoDB Connected...");
    //port
    app.listen(port, () => console.log(`Server started on ${port}`));
  });

//router
const home = require("./src/routes/get/index.get");
const m = require("./src/middleware/test");

app.use("/", m);
app.use("/", home);
