const { Exploration } = require("../models");
const { errorMessage } = require("../constants");

module.exports = {
  userPermissions: (req, res, next) => {
    const id = +req.params.id;
    if (id != req.user.id) {
      return res.status(403).json({
        message: errorMessage.UNAUTHORIZED,
      });
    }
    next();
  },
  explorationPermissions: (req, res, next) => {
const id = +req.params.id
    const { author_id } = Exploration.findByPk(id);
    if (author_id !== req.user.id) {
      return res.status(403).json({
        message: errorMessage.UNAUTHORIZED,
      });
    }
    next();
  },
};
