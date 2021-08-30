const tokenMiddleware = require('./token');
const userMiddleware = require('./user');
const explorationMiddleware = require('./exploration');
const commentMiddleware = require('./comment');
const rateLimit = require('../middlewares/rateLimit');

module.exports = {
  tokenMiddleware,
  userMiddleware,
  explorationMiddleware,
  commentMiddleware,
  rateLimit,
};
