const express = require("express");
const router = express.Router();
const { explorationController } = require("../controllers");
const { identityMiddleware } = require("../middlewares");

router
  .get("/:id(\\d+)", explorationController.getInformations)
  .post("/create", explorationController.create)
  .patch("/:id(\\d+)/update", identityMiddleware.explorationPermissions, explorationController.update)
  .delete("/:id(\\d+)/delete", identityMiddleware.explorationPermissions ,explorationController.delete);

module.exports = router;
