const express = require("express");
const router = express.Router();

router.post("/logout", async (req, res) => {
  res
    .clearCookie("token", {
      httpOnly: true,
      secure: false,
    })
    .send({ status: true });
});

module.exports = router