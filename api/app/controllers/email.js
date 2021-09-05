const { ERROR } = require('../constants');
const { PasswordToken, Report, User } = require('../models');
const { email: emailUtils } = require('../utils');
const crypto = require('crypto');
const baseUrlForgotPassword = "https://www.explorastro.com/password/forgot/update"

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

            const isSend = await emailUtils.forgotPassword(lowerEmail, `${baseUrlForgotPassword}?token=${tokenPassword}`);

            if (isSend) {
                return res.status(200).json({
                    message: ERROR.EMAIL_HAS_BEEN_SENT,
                });
            } else {
                throw new Error(ERROR.EMAIL_HAS_FAILED);
            }

        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: ERROR.INTERNAL_ERROR
            });
        }
    },

    report: async (req, res) => {
        try {
            const { id } = req.user;
            const { content, object } = req.body;
            
            if (!content || !object) {
                return res.status(400).json({
                    message: ERROR.REQUIRED_FIELDS
                });
            }
            
            await Report.create({
                object,
                content,
                author_id: id,
            });

            const isSend = await emailUtils.report(content, object);

            if (!isSend) {
                throw new Error(ERROR.EMAIL_HAS_FAILED);
            }

            return res.status(200).json({
                message: ERROR.REPORT_SEND,
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: ERROR.INTERNAL_ERROR
            });
        }
    }

};