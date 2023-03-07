const { findById } = require('../services/User.service');

const validateDeleteUser = async (req, res, next) => {
    const { user: { data: { dataValues: { id } } } } = req;
    
    const { type, message } = await findById(id);

    if (type) return res.status(404).json({ message: 'user does not exist' });

    if (id !== message.id) return res.status(401).json({ message: 'Unauthorized user' });
    
    next();
};

module.exports = validateDeleteUser;