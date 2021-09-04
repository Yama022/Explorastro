const { ERROR } = require('../constants');
const { PasswordToken } = require('../models');
const { email: emailUtils } = require('../utils');
const crypto = require('crypto');

module.exports = {
    forgotPassword: async (req, res) => {
        try {
            const { email } = req.body;
            const lowerEmail = email.toLowerCase();
            const user = await User.findOne({ where: { email: lowerEmail } });

            if (!user) {
                return res.status(400).json({
                    message: ERROR.EMAIL_NOT_FOUND
                });
            }

            const tokenPassword = crypto.randomBytes(32).toString('hex');

            await PasswordToken.create({
                user_id: user.id,
                token: tokenPassword,
            });

            const isSend = await emailUtils.forgotPassword(lowerEmail, `https://www.explorastro.com/password/forgot/update?token=${tokenPassword}`);

            if (isSend) {
                return res.status(200).json({
                    message: 'A message has been sent to your email',
                });
            } else {
                throw new Error('Error sending email');
            }

        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: ERROR.INTERNAL_ERROR
            });
        }
    },
};