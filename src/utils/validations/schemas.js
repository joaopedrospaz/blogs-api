const Joi = require('joi');

const schemaCreateUser = Joi.object().keys({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    image: Joi.string(),
}).messages({
    'any.required': '"{#key}" is required',
    'string.email': '"{#key}" must be a valid email',
    'string.min': '"{#key}" length must be at least {{#limit}} characters long',
});
module.exports = {
    schemaCreateUser,
};