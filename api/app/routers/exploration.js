const express = require("express");
const router = express.Router();
const { explorationController } = require("../controllers");

router
  .get("/:id(\\d+)", explorationController.getInformations)
  .post("/create", explorationController.create)
  .patch("/:id(\\d+)/update", explorationController.update)
  .delete("/:id(\\d+)/delete", explorationController.delete);

module.exports = router;
