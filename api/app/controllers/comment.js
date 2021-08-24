const { errorMessage, EVENT } = require("../constants");
const { Comment, Exploration } = require("../models");
const {event} = require("../utils");

module.exports = {
  getAll: async (req, res) => {
    try {
      const { id } = req.params;
      const exploration = await Exploration.findByPk(id, {
        include: ["comments"],
      });

      if (!exploration) {
        return res.status(404).json({
          message: errorMessage.EXPLORATION_NOT_FOUND,
        });
      }

      res.status(200).json(exploration.comments);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: errorMessage.INTERNAL_ERROR });
    }
  },

  add: async (req, res) => {
    try {
      const { id } = req.params;
      const { content } = req.body;
      const user = req.user;
      const exploration = await Exploration.findByPk(id);

      if (!exploration) {
        return res.status(404).json({
          message: errorMessage.EXPLORATION_NOT_FOUND,
        });
      }

      const comment = await Comment.create({
        content,
        author_id: user.id,
      });

      await exploration.addComment(comment);

      // Save event
      await event.saveUserAction(EVENT.ACTION.COMMENT, user, {
        exploration: exploration.toJSON(),
        comment: comment.toJSON(),
      });

      res.status(200).json({
        message: errorMessage.COMMENT_ADDED,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: errorMessage.INTERNAL_ERROR });
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
          message: errorMessage.UNAUTHORIZED,
        });
      }

      if (!exploration) {
        return res.status(404).json({
          message: errorMessage.EXPLORATION_NOT_FOUND,
        });
      }

      if (!comment) {
        return res.status(404).json({
          message: errorMessage.COMMENT_NOT_FOUND,
        });
      }

      await comment.update({ content });

      // Save event
      await event.saveUserAction(EVENT.ACTION.EDIT_COMMENT, user, {
        exploration: exploration.toJSON(),
        comment: comment.toJSON(),
      });

      res.status(200).json({
        message: errorMessage.COMMENT_EDITED,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: errorMessage.INTERNAL_ERROR });
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
          message: errorMessage.UNAUTHORIZED,
        });
      }

      if (!exploration) {
        return res.status(404).json({
          message: errorMessage.EXPLORATION_NOT_FOUND,
        });
      }

      if (!comment) {
        return res.status(404).json({
          message: errorMessage.COMMENT_NOT_FOUND,
        });
      }

      await exploration.removeComment(comment);
      await comment.destroy();

      // Save event
      await event.saveUserAction(EVENT.ACTION.DELETE_COMMENT, user, {
        exploration: exploration.toJSON(),
      });

      res.status(200).json({
        message: errorMessage.COMMENT_DELETED,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: errorMessage.INTERNAL_ERROR });
    }
  },
};
