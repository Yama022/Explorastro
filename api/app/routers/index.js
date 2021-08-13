const express = require("express");
const router = express.Router();

const { mainController } = require("../controllers");

const authRouter = require("./auth");
const userRouter = require("./user");
const explorationRouter = require("./exploration");

router.get("/", mainController.informationsAPI);

router.use(authRouter);

router.use("/user", userRouter);

router.use("/exploration", explorationRouter);

module.exports = router;
