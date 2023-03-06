const { User } = require('../models');

const findUser = async ({ email, password }) => {
    const user = await User.findOne({ where: { email, password } });
    if (!user) return { type: 'Not found', message: '' };
    return { type: null, message: user };
};

const createUser = async (data) => {
    try {
        const newUser = await User.create(data);
        return { type: null, message: newUser.dataValues };
    } catch (error) {
        return { type: error, message: error.message };
    }
};

module.exports = {
    findUser,
    createUser,
};