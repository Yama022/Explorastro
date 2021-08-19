const express = require("express");
const router = express.Router();

const { mainController } = require("../controllers");
const { tokenMiddleware } = require("../middlewares");

const authRouter = require("./auth");
const userRouter = require("./user");
const explorationRouter = require("./exploration");
const errorRouter = require("./error");

/**
 * Return API Informations
 * @route GET /api/v1/
 * @group Informations - Operations about API
 * @returns {API-Infos.model} 200 - An object containing API informations
 */
router.get("/", mainController.informationsAPI);

router.use(authRouter);

router.use("/user", tokenMiddleware.authenticateToken, userRouter);

router.use(
  "/exploration",
  tokenMiddleware.authenticateToken,
  explorationRouter
);

router.use(errorRouter);

module.exports = router;
