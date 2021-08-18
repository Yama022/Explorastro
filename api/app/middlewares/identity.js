const { Exploration } = require("../models");
const { errorMessage } = require("../constants");

module.exports = {
  userPermissions: (req, res, next) => {
    const id = +req.params.id;
    if (id != req.user.id) {
      console.log("Pas bon");
      return res.status(403).json({
        message: errorMessage.UNAUTHORIZED,
      });
    }
    next();
  },
  explorationPermissions: (req, res, next) => {
    const { author_id } = Exploration.findByPk(req.params.id);
    if (author_id !== req.user.id) {
      return res.status(403).json({
        message: errorMessage.UNAUTHORIZED,
      });
    }
    next();
  },
};
