const tokenMiddleware = require('./token');
const userMiddleware = require('./user');
const explorationMiddleware = require('./exploration');
const commentMiddleware = require('./comment');

module.exports = {
  tokenMiddleware,
  userMiddleware,
  explorationMiddleware,
  commentMiddleware,
};
