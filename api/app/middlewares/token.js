const { jwt } = require("../utils");
const { errorMessage } = require('../constants');

module.exports = {
    authenticateToken: (req, res, next) => {
        const authHeader = req.headers.authorization;
        const token = authHeader?.split(" ")[1];

        if (token === "undefined" || !token) {
            return res.status(401).send({
                message: errorMessage.MISSING_TOKEN
            });
        }

        jwt.verifyAccessToken(token, (err, user) => {
            if (err) {
                return res.status(401).send({
                    message: errorMessage.TOKEN_AUTH_FAILED,
                });
            }
            req.user = user;
            next();
        });
    },
};
