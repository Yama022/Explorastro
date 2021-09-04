const express = require('express');

const router = express.Router();

const validate = require('../validations/validate');
const { userSchema } = require('../validations/schemas');
const { authController, emailController } = require('../controllers');
const { userMiddleware } = require('../middlewares');

router
  /**
   * Connect to the API and get the user's information from the database
   * @route POST /api/v1/login
   * @group Authentification - Operations about authentification
   * @param {string} login.body.required - The user's email or username
   * @param {string} password.body.required - The user's password
   * @returns {User.model} 200 - An object containing the user's information
   * @returns {Error.model}  default - An object containing the error message
   */
  .post('/login', authController.login)

  /**
   * Sign up a new user in the database
   * @route POST /api/v1/signup
   * @group Authentification - Operations about authentification
   * @param {string} firstname.body.required - The user's firstname
   * @param {string} lastname.body.required - The user's lastname
   * @param {string} username.body.required - The user's username
   * @param {string} email.body.required - The user's email
   * @param {string} password.body.required - The user's password
   * @returns {User.model} 200 - An object containing the user's information
   * @returns {Error.model}  default - An object containing the error message
   */
  .post('/signup', validate('body', userSchema), authController.signup)

  /**
   * Send email when the user forgot his password
   * @route POST /api/v1/password/forgot
   * @group User - Operations about users
   * @param {integer} id.param.required - The id of the user.
   * @param {string} old_password.email.required - User email
   * @returns {Object} 200 - An object containing a success message
   * @returns {Error.model}  default - An object containing the error message
   * @security JWT
   */
    .post(
    "/password/forgot/:id(\\d+)",
    userMiddleware.checkIfExists,
    emailController.forgotPassword
    )
  
  
  /**
   * Refresh the user's token
   * @route POST /api/v1/token
   * @group Authentification - Operations about authentification
   * @param {string} token.body.required - The user's refresh token
   * @returns {Object} 200 - An object containing the new token
   */
  .post('/token', authController.refreshToken);

module.exports = router;
