const { errorMessage } = require("../constants");
const { timeline } = require('../utils');
const { User } = require('../models');

module.exports = {
  get: async (req, res) => {
    try {
      const user = await User.findByPk(req.user.id, {
        include: ['following']
      });

      if (!user) {
        return res.status(401).json({
          message: errorMessage.USER_NOT_FOUND
        });
      }

      const timelineContent = await timeline.generate(user);
      res.status(200).json(timelineContent);
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: errorMessage.INTERNAL_ERROR,
      });
    }
  },
};