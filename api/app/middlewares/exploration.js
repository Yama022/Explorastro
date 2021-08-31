/* eslint-disable consistent-return */
const { Exploration } = require('../models');
const { ERROR } = require('../constants');

module.exports = {
  checkIfExists: async (req, res, next) => {
    const id = +req.params.id;

    const exploration = await Exploration.findByPk(id);

    if (!exploration) {
      return res.status(404).json({
        message: ERROR.EXPLORATION_NOT_FOUND,
      });
    }

    req.exploration = exploration;
    next();
  },
  checkPermissions: async (req, res, next) => {
    const adminRoleId = 3;
    if (req.exploration.author_id !== req.user.id && req.user.role_id !== adminRoleId) {
      return res.status(403).json({
        message: ERROR.UNAUTHORIZED,
      });
    }
    next();
  },
};
