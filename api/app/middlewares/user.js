/* eslint-disable consistent-return */
const { ERROR } = require('../constants');
const { User } = require('../models');

module.exports = {
  checkIfExists: async (req, res, next) => {
    let user;
    if (req.params.userId) {
      user = await User.findByPk(req.params.userId);
      if (!user) {
        return res.status(404).json({
          message: ERROR.USER_NOT_FOUND,
        });
      }
    }
    else {
      user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(404).json({
          message: ERROR.USER_NOT_FOUND,
        });
      }
    }
    req.user = user;
    next();
  },
  checkPermissions: async (req, res, next, id = +req.params.id) => {
    if (id !== +req.user.id) {
      return res.status(403).json({
        message: ERROR.UNAUTHORIZED,
      });
    }
    next();
  },
};
