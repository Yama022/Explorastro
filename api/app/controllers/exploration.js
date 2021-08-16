const { Exploration } = require("../models");
const { errorMessage } = require("../constants");
const { Op } = require("sequelize");

module.exports = {
  getInformations: async (req, res) => {
    const { id } = req.params;
    const exploration = await Exploration.findByPk(id, {
      include: { all: true },
    });

    if (!exploration) {
      res.status(404).send({
        message: errorMessage.EXPLORATION_NOT_FOUND,
      });
    }

    res.json(exploration);
  },

  create: async (req, res) => {
    try {
      const { name } = req.body;

      if (!name || name.length < 1) {
        return res.status(400).send({
          message: errorMessage.MISSING_EXPLORATION_NAME,
        });
      }

      const numberOfExplorations = await Exploration.count({
        where: {
              [Op.and]: [{ author_id: req.user.id }, { date: { [Op.lte]: Date.now() } }],
        },
      });
        
      if (numberOfExplorations >= 10) {
        return res.status(400).send({
          message: errorMessage.EXPLORATION_LIMIT_REACHED,
        });
      }

      const exploration = new Exploration({
        name,
        author_id: req.user.id,
        ...req.body,
      });

      await exploration.save();

      res.json(exploration);
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: errorMessage.INTERNAL_ERROR,
      });
    }
  },

  update: (req, res) => {
    res.json({ message: "update an exploration" });
  },

  delete: (req, res) => {
    res.json({ message: "delete an exploration" });
  },
};
