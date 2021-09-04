var apiKey = process.env.MAILGUN_API_KEY;
var domain = process.env.MAILGUN_DOMAIN;
const mailgunData = { apiKey: process.env.MAILGUN_APIKEY, baseUrl: domain };
const mailgun = require('mailgun-js')({ apiKey, domain });
const axios = require('axios');
const { EMAIL } = require('../constants');
 
module.exports = {
    forgotPassword: async (email, link) => {
        try {
            await axios({
                method: 'post',
                url: `${mailgunData.baseUrl}/messages`,
                auth: {
                    username: 'api',
                    password: mailgun.apiKey
                },
                params: {
                    from: EMAIL.FROM,
                    to: email,
                    subject: EMAIL.FORGOT_PASSWORD.SUBJECT,
                    text:
                    `${EMAIL.FORGOT_PASSWORD.BODY}
                    ${link}`,
                }
            })
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    },
};
