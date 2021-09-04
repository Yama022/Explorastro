const mainController = require('./main');
const authController = require('./auth');
const explorationController = require('./exploration');
const userController = require('./user');
const followController = require('./follow');
const participationController = require('./participation');
const commentController = require('./comment');
const timelineController = require('./timeline');
const searchController = require('./search');
const emailController = require('./email');

module.exports = {
  mainController,
  authController,
  explorationController,
  userController,
  followController,
  participationController,
  commentController,
  timelineController,
  searchController,
  emailController
};
