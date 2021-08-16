const jwt = require("jsonwebtoken");
const { errorMessage } = require('../constants');
const TOKEN_MAX_AGE = "30m";

module.exports = {
    generateAccessToken: (user) => {
        return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, /*{
            expiresIn: TOKEN_MAX_AGE,
        }*/);
    },
    generateRefreshToken: (user) => {
        return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
    },
    verifyAccessToken: (token, callback) => {
        return jwt.verify(
            token,
            process.env.ACCESS_TOKEN_SECRET,
            (err, decoded) => {
                if (err) {
                    return callback({ message: errorMessage.INVALID_TOKEN }, null);
                }
                return callback(null, decoded);
            }
        );
    },
    verifyRefreshToken: (token, callback) => {
        return jwt.verify(
            token,
            process.env.REFRESH_TOKEN_SECRET,
            (err, decoded) => {
                if (err) {
                    return callback({ message: errorMessage.INVALID_TOKEN }, null);
                }
                return callback(null, decoded);
            }
        );
    },
};
