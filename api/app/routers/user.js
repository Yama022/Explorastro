const express = require("express");
const router = express.Router();
const { userController } = require("../controllers");
const { identityMiddleware } = require("../middlewares");

router
  .get("/:id(\\d+)", userController.getInformations)
  .patch(
    "/:id(\\d+)/update",
    identityMiddleware.userPermissions,
    userController.update
  )
  .patch(
    "/:id(\\d+)/update/password",
    identityMiddleware.userPermissions,
    userController.updatePassword
  )
  .patch(
    "/:id(\\d+)/update/username",
    identityMiddleware.userPermissions,
    userController.updateUsername
  )
  .delete(
    "/:id(\\d+)/delete",
    identityMiddleware.userPermissions,
    userController.delete
  );

module.exports = router;
