const Joi = require('joi');

const schema = Joi.object({
  content: Joi.string()
    .min(3)
    .max(280)
    .required(),
});

module.exports = schema;
