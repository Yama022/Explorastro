const express = require("express");
const router = express.Router();

const {
  explorationController,
  participationController,
  commentController,
} = require("../controllers");
const { identityMiddleware } = require("../middlewares");

const validate = require("../validations/validate");
const { commentSchema } = require("../validations/schemas");

router

  /**
   * Get all explorations that are public.
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
   * @param {integer} id.param.required - The id of the exploration.
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
   * @param {integer} id.param.required - The id of the exploration.
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
   * Delete an exploration by his id
   * @route DELETE /api/v1/exploration/1/delete
   * @group Exploration - Operations about explorations
   * @param {integer} id.param.required - The id of the exploration.
   * @returns {Object} 200 - An object containing a success message
   * @returns {Error.model}  default - An object containing the error message
   * @security JWT
   */
  .delete(
    "/:id(\\d+)/delete",
    identityMiddleware.explorationPermissions,
    explorationController.delete
  )

  /**
   * Get participations of an exploration by his id
   * @route GET /api/v1/exploration/1/participants
   * @group Exploration - Operations about explorations
   * @param {integer} id.param.required - The id of the exploration.
   * @returns {Object} 200 - An object containing a success message
   * @returns {Error.model}  default - An object containing the error message
   * @security JWT
   */
  .get("/:id(\\d+)/participants", participationController.getAll)

  /**
   * Subscribe a user to an exploration by his id
   * @route PUT /api/v1/exploration/1/participants/add/:userId
   * @group Exploration - Operations about explorations
   * @param {integer} id.param.required - The id of the exploration.
   * @param {integer} userId.param.required - The id of the user.
   * @returns {Object} 200 - An object containing a success message
   * @returns {Error.model}  default - An object containing the error message
   * @security JWT
   */
  .put("/:id(\\d+)/participants/add/:userId(\\d+)", participationController.add)

  /**
   * Unsuscribe a user from an exploration by his id
   * @route DELETE /api/v1/exploration/1/participants/remove/:userId
   * @group Exploration - Operations about explorations
   * @param {integer} id.param.required - The id of the exploration.
   * @param {integer} userId.param.required - The id of the user.
   * @returns {Object} 200 - An object containing a success message
   * @returns {Error.model}  default - An object containing the error message
   * @security JWT
   */
  .delete(
    "/:id(\\d+)/participants/remove/:userId(\\d+)",
    participationController.remove
  )

  .get("/:id(\\d+)/comments", commentController.getAll)

  .post(
    "/:id(\\d+)/comments/add",
    validate("body", commentSchema),
    commentController.add
  )

  .patch(
    "/:id(\\d+)/comments/:commentId(\\d+)/edit",
    validate("body", commentSchema),
    commentController.edit
  )

  .delete(
    "/:id(\\d+)/comments/:commentId(\\d+)/delete",
    commentController.delete
  );

module.exports = router;
