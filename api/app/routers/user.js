const express = require("express");
const router = express.Router();
const { userController } = require("../controllers");

router
  .get("/:id(\\d+)", userController.getInformations)
  .patch("/:id(\\d+)/update", userController.update)
  .patch("/:id(\\d+)/update/password", userController.updatePassword)
  .delete("/:id(\\d+)/delete", userController.delete);

module.exports = router;
