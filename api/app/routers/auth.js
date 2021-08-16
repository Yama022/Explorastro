const express = require("express");
const router = express.Router();

const validate = require('../validations/validate');
const { userSchema } = require('../validations/schemas');
const { authController } = require("../controllers");

router
  .post("/login", authController.login)
  .post("/signup", validate('body',userSchema), authController.signup)
  .post("/token", authController.refreshToken);

module.exports = router;