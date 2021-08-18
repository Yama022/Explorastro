const express = require("express");
const router = express.Router();
const { userController } = require("../controllers");
const { identityMiddleware } = require("../middlewares");

router
  /**
   * Get informations about a user by his id
   * @route GET /api/v1/user/1
   * @group User - Operations about users
   * @returns {User.model} 200 - An object containing the user's information
   * @returns {Error.model}  default - An object containing the error message
   * @security JWT
   */
  .get("/:id(\\d+)", userController.getInformations)

  /**
   * Update informations about a user by his id
   * @route PATCH /api/v1/user/1/update
   * @group User - Operations about users
   * @param {string} firstname - Firstname
   * @param {string} lastname - Lastname
   * @param {string} email - Email
   * @param {avatar_url} avatar_url - Avatar URL
   * @param {string} bio - Bio
   * @param {string} city - City
   * @param {string} zipcode - ZipCode
   * @param {string} twitter - Twitter Username
   * @param {string} instagram - Instagram Username
   * @param {string} facebook - Facebook Username
   * @param {string} tiktok - TikTok Username
   * @param {string} astrobin - Astrobin Username
   * @returns {User.model} 200 - An object containing the updated user's information
   * @returns {Error.model}  default - An object containing the error message
   * @security JWT
   */
  .patch(
    "/:id(\\d+)/update",
    identityMiddleware.userPermissions,
    userController.update
  )

  /**
   * Update user's password by his id
   * @route PATCH /api/v1/user/1/update/password
   * @group User - Operations about users
   * @param {string} old_password.query.required - Old password
   * @param {string} new_password.query.required - The new password you want to set
   * @returns {Object} 200 - An object containing a success message
   * @returns {Error.model}  default - An object containing the error message
   * @security JWT
   */
  .patch(
    "/:id(\\d+)/update/password",
    identityMiddleware.userPermissions,
    userController.updatePassword
  )

  /**
   * Update user's password by his id
   * @route PATCH /api/v1/user/1/update/username
   * @group User - Operations about users
   * @param {string} username.query.required - The new username you want to set
   * @param {string} password.query.required - The password
   * @returns {Object} 200 - An object containing a success message
   * @returns {Error.model}  default - An object containing the error message
   * @security JWT
   */
  .patch(
    "/:id(\\d+)/update/username",
    identityMiddleware.userPermissions,
    userController.updateUsername
  )

  /**
   * Delete a user by his id
   * @route DELETE /api/v1/user/1/delete
   * @group User - Operations about users
   * @param {string} password.query.required - The password
   * @returns {Object} 200 - An object containing a success message
   * @returns {Error.model}  default - An object containing the error message
   * @security JWT
   */
  .delete(
    "/:id(\\d+)/delete",
    identityMiddleware.userPermissions,
    userController.delete
  );

module.exports = router;
