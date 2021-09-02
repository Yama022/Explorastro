/* eslint-disable consistent-return */
const { ERROR } = require('../constants');
const { Comment } = require('../models');

module.exports = {
  checkIfExists: async (req, res, next) => {
    const comment = await Comment.findByPk(req.params.commentId);
    if (!comment) {
      return res.status(404).json({
        message: ERROR.COMMENT_NOT_FOUND,
      });
    }
    next();
  },
  checkPermissions: async (req, res, next) => {
    const comment = await Comment.findByPk(req.params.commentId);
    const adminRoleId = 3;
    if (comment.author_id !== req.user.id || req.user.role_id !== adminRoleId) {
      return res.status(403).json({
        message: ERROR.UNAUTHORIZED,
      });
    }
    next();
  },
};
