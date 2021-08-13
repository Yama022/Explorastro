const express = require("express");
const router = express.Router();

router
  .post("/login", (req, res) => {
    res.send({
      message: "Login",
    });
  })
  .post("/signup", (req, res) => {
    res.send({
      message: "Signup",
    });
  })
  .post("/token", (req, res) => {
    res.json({
      message: "Refresh Token",
    });
  });

module.exports = router;
