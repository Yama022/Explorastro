const { ERROR, EVENT } = require("../constants");
const { Comment, Exploration } = require("../models");
const { event } = require("../utils");

module.exports = {
  getAll: async (req, res) => {
    try {
      const { id } = req.params;
      const exploration = await Exploration.findByPk(id, {
        include: ["comments"],
      });

      res.status(200).json(exploration.comments);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: ERROR.INTERNAL_ERROR });
    }
  },

  add: async (req, res) => {
    try {
      const { id } = req.params;
      const { content } = req.body;
      const user = req.user;
      const exploration = await Exploration.findByPk(id);

      const comment = await Comment.create({
        content,
        author_id: user.id,
      });

      await exploration.addComment(comment);

      res.status(200).json({
        message: ERROR.COMMENT_ADDED,
      });

      return await event.saveUserAction(EVENT.ACTION.COMMENT, user, {
        exploration: exploration.toJSON(),
        comment: comment.toJSON(),
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: ERROR.INTERNAL_ERROR });
    }
  },

  edit: async (req, res) => {
    try {
      const { id, commentId } = req.params;
      const { content } = req.body;
      const user = req.user;
      const exploration = await Exploration.findByPk(id);
      const comment = await Comment.findByPk(commentId);

      if (comment?.author_id !== user.id) {
        return res.status(403).json({
          message: ERROR.UNAUTHORIZED,
        });
      }

      await comment.update({ content });

      res.status(200).json({
        message: ERROR.COMMENT_EDITED,
      });

      await event.saveUserAction(EVENT.ACTION.EDIT_COMMENT, user, {
        exploration: exploration.toJSON(),
        comment: comment.toJSON(),
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: ERROR.INTERNAL_ERROR });
    }
  },

  delete: async (req, res) => {
    try {
      const { id, commentId } = req.params;
      const user = req.user;
      const exploration = await Exploration.findByPk(id);
      const comment = await Comment.findByPk(commentId);

      if (comment?.author_id !== user.id) {
        return res.status(403).json({
          message: ERROR.UNAUTHORIZED,
        });
      }

      if (!comment) {
        return res.status(404).json({
          message: ERROR.COMMENT_NOT_FOUND,
        });
      }

      await exploration.removeComment(comment);
      await comment.destroy();

      res.status(200).json({
        message: ERROR.COMMENT_DELETED,
      });

      await event.saveUserAction(EVENT.ACTION.DELETE_COMMENT, user, {
        exploration: exploration.toJSON(),
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: ERROR.INTERNAL_ERROR });
    }
  },
};
