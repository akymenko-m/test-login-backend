const Joi = require("joi");

const userSchema = Joi.object({
    password: Joi.string().min(6).required(),
    name: Joi.string().required(),
});

module.exports = userSchema;
