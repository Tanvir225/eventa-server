const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
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

//middleware  route
const verifyToken = require("./src/middleware/verifyToken");

//database connection
mongoose.connect(process.env.MONGOOSE_URI).then(() => {
  console.log("MongoDB Connected...");
  //port
  app.listen(port, () => console.log(`Server started on ${port}`));
});

//middleware usage
app.use("/users", verifyToken);

//router
const home = require("./src/routes/get/index.get");

//user crud route
const postUser = require("./src/routes/post/user.post");
const getUser = require("./src/routes/get/users.get");
const patchUser = require("./src/routes/patch/user.patch");

//jwt post route
const jwt = require("./src/routes/post/jwt.post");

//home route
app.use("/", home);

// users panel
app.use("/", postUser);
app.use("/", getUser);
app.use("/", patchUser);

//jwt panel
app.use("/", jwt);


