const { Exploration } = require("../models");
const { errorMessage } = require("../constants");

module.exports = {
  userPermissions: (req, res, next, id=+req.params.id) => {
    if (id != req.user.id) {
      return res.status(403).json({
        message: errorMessage.UNAUTHORIZED,
      });
    }
    next();
  },
  explorationPermissions: async (req, res, next) => {
    const id = +req.params.id;
    const { author_id } = await Exploration.findByPk(id);
    console.log(author_id);
    if (author_id !== req.user.id) {
      return res.status(403).json({
        message: errorMessage.UNAUTHORIZED,
      });
    }
    next();
  },
};
