const schemas = require('./schemas');

const validateNewUser = (obj) => {
    const { error } = schemas.schemaCreateUser.validate(obj);
    if (error) return { type: error.details[0].type, message: error.message };

    return { type: null, message: '' };
}; 

module.exports = {
    validateNewUser,
};