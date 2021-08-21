const { errorMessage } = require("../constants");
const { Comment, Exploration } = require("../models");

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

  add: async (req, res) => {},

  edit: async (req, res) => {},

  delete: async (req, res) => {},
};
