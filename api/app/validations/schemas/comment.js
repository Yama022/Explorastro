const Joi = require('joi');

const schema = Joi.object({
    content: Joi.string()
        .min(1)
        .max(280)
        .required(),
})

module.exports = schema;