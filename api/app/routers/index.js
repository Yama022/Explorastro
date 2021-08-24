const express = require("express");
const router = express.Router();

const { tokenMiddleware } = require("../middlewares");

const authRouter = require("./auth");
const userRouter = require("./user");
const explorationRouter = require("./exploration");
const errorRouter = require("./error");
const mainRouter = require("./main");

// Main routes
router.use(mainRouter);

// Router for authentication
router.use(authRouter);

// Router for user
router.use("/user",
  tokenMiddleware.authenticateToken,
  userRouter
);

// Router for exploration
router.use(
  "/exploration",
  tokenMiddleware.authenticateToken,
  explorationRouter
);

router.use(errorRouter);

module.exports = router;
