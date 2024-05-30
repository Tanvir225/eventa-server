const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.use(async (req, res, next) => {
  //token get from cookie
  const token = req?.cookies?.token;
  //console.log("token inside from middleware", token);

  //check token
  if (!token) {
    return res.status(401).send({ message: "unauthorised access" });
  }

  //jwt verify token
  jwt.verify(token, process.env.ACCESS_TOKEN, (err, decode) => {
    if (err) {
      return res.status(401).send({ message: "unauthorised access" });
    }

    req.decodedUser = decode;
    next();
  });
});

module.exports = router;
