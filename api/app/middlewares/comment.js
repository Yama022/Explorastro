const { ERROR } = require("../constants");
const { Comment } = require("../models");

module.exports = {
    checkIfExists: async (req, res, next) => {
        const comment = await Comment.findByPk(req.params.id);
        if (!comment) {
            return res.status(404).json({
                message: ERROR.COMMENT_NOT_FOUND
            });
        }
        next();
    },
    checkPermissions: async (req, res, next) => {
        const comment = await Comment.findByPk(req.params.id);
        if (!comment.author_id !== req.user.id) {
            return res.status(403).json({
                message: ERROR.UNAUTHORIZED
            });
        }
        next();
    }
}