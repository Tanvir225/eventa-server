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
//const verifyToken = require("./src/middleware/verifyToken");

//database connection
mongoose.connect(process.env.MONGOOSE_URI).then(() => {
  console.log("MongoDB Connected...");
  //port
  app.listen(port, () => console.log(`Server started on ${port}`));
});

//middleware usage
//app.use("/users", verifyToken);

//router
const home = require("./src/routes/get/index.get");

//user crud route
const postUser = require("./src/routes/post/user.post");
const getUser = require("./src/routes/get/users.get");
const patchUser = require("./src/routes/patch/user.patch");
const deleteUser = require("./src/routes/delete/user.delete")
const logOut = require('./src/routes/post/logout.post')
//verifyRole route
const role = require("./src/routes/get/role.get")



//remove token import
const removeToken = require("./src/routes/post/logout.post")

//jwt post route
const jwt = require("./src/routes/post/jwt.post");

//logout api endpoint
app.use("/", removeToken)


//verifyRoll api endpoint
app.use("/", role)




//jwt api endpoint
app.use("/", jwt);

//home api endpoint
app.use("/", home);

// users api endpoint
app.use("/", postUser);
app.use("/", getUser);
app.use("/", patchUser);
app.use("/", deleteUser);

app.use("/",logOut)



