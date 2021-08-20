const express = require("express");
const router = express.Router();
const { explorationController, participationController } = require("../controllers");
const { identityMiddleware } = require("../middlewares");

router

  /**
   * Get informations about an exploration by his id
   * @route GET /api/v1/exploration
   * @group Exploration - Operations about explorations
   * @returns {Array.<Exploration>} 200 - An object containing the exploration's information
   * @returns {Error.model}  default - An object containing the error message
   * @security JWT
   */
  .get("/", explorationController.getAll)

  /**
   * Get informations about an exploration by his id
   * @route GET /api/v1/exploration/1
   * @group Exploration - Operations about explorations
   * @returns {Exploration.model} 200 - An object containing the exploration's information
   * @returns {Error.model}  default - An object containing the error message
   * @security JWT
   */
  .get("/:id(\\d+)", explorationController.getInformations)

  /**
   * Create an exploration by the user
   * @route POST /api/v1/exploration/create
   * @group Exploration - Operations about explorations
   * @param {string} name.body.required - The name of the exploration
   * @returns {Exploration.model} 200 - An object containing the created explorations's information
   * @returns {Error.model}  default - An object containing the error message
   * @security JWT
   */
  .post("/create", explorationController.create)

  /**
   * Get informations about an exploration by his id
   * @route PATCH /api/v1/exploration/1/update
   * @group Exploration - Operations about explorations
   * @param {string} name.body - The name of the exploration
   * @param {string} description.body - Description
   * @param {Location.model} location.body - Geographical coordinates
   * @param {string} date.body - Date
   * @param {integer} max_participants.body - Maximum number of participants
   * @param {boolean} is_published.body - Publish status (true - published, false - not published)
   * @param {string} image_url.body - Image URL
   * @returns {Exploration.model} 200 - An object containing the user's information
   * @returns {Error.model}  default - An object containing the error message
   * @security JWT
   */
  .patch(
    "/:id(\\d+)/update",
    identityMiddleware.explorationPermissions,
    explorationController.update
  )

  /**
   * Delete a user by his id
   * @route DELETE /api/v1/exploration/1/delete
   * @group Exploration - Operations about explorations
   * @returns {Object} 200 - An object containing a success message
   * @returns {Error.model}  default - An object containing the error message
   * @security JWT
   */
  .delete(
    "/:id(\\d+)/delete",
    identityMiddleware.explorationPermissions,
    explorationController.delete
  )

  .put(
    "/:id(\\d+)/participants/add/:userId(\\d+)",
    participationController.addParticipant
  )

  .delete(
    "/:id(\\d+)/participants/remove/:userId(\\d+)",
    participationController.removeParticipant
  );

module.exports = router;
