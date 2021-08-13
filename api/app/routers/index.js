const express = require("express");
const router = express.Router();

const { mainController } = require("../controllers");

const authRouter = require("./auth");
const userRouter = require("./user");

router.get("/", mainController.informationsAPI);

router.use(authRouter);

router.use("/user", userRouter);

module.exports = router;
