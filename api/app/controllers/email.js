const { ERROR } = require('../constants');

module.exports = {
    forgotPassword: (req, res) => {
        try {
            const { email } = req.body;
            const user = req.user;

            if (user.email !== email) {
                return res.status(400).json({
                    message: ERROR.EMAIL_NOT_MATCH,
                });
            }

            // TODO : Send a message to the user with a link to reset password

            return res.status(200).json({
                message: 'Email sent',
            });

        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: ERROR.INTERNAL_ERROR
            });
        }
    },
};