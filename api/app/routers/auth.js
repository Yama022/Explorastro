const express = require("express");
const { authController } = require("../controllers");
const router = express.Router();

router
  .post("/login", authController.login)
  .post("/signup", authController.signup)
  .post("/token", authController.refreshToken);

module.exports = router;
