const validations = require('../utils/validations/validationsInputs');

const validateCreateUser = (req, res, next) => {
    const newUser = req.body;
   const { type, message } = validations.validateNewUser(newUser);
    if (type) return res.status(400).json({ message });
    next();
};

module.exports = validateCreateUser;