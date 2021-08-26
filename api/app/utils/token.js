const jwt = require('jsonwebtoken');
const { ERROR } = require('../constants');

const TOKEN_MAX_AGE = '1y';

module.exports = {
  generateAccessToken: (user) => jwt.sign(user, process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: TOKEN_MAX_AGE }),
  generateRefreshToken: (user) => jwt.sign(user, process.env.REFRESH_TOKEN_SECRET),
  verifyAccessToken: (token, callback) => jwt.verify(
    token,
    process.env.ACCESS_TOKEN_SECRET,
    (err, decoded) => {
      if (err) {
        return callback({ message: ERROR.INVALID_TOKEN }, null);
      }
      return callback(null, decoded);
    },
  ),
  verifyRefreshToken: (token, callback) => jwt.verify(
    token,
    process.env.REFRESH_TOKEN_SECRET,
    (err, decoded) => {
      if (err) {
        return callback({ message: ERROR.INVALID_TOKEN }, null);
      }
      return callback(null, decoded);
    },
  ),
};
