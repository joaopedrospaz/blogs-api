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
        return { type: error.name, message: error.message };
    }
};

const findAll = async () => {
    const allUSers = await User.findAll({ attributes: { exclude: ['password'] } }); 
    return { type: null, message: allUSers };
};

const findById = async (id) => {
    const getUser = await User.findByPk(id, { attributes: { exclude: ['password'] } });
    if (!getUser) return { type: 'NOT_FOUND', message: 'User does not exist' };
    return { type: null, message: getUser };
};

const deleteUser = async (id) => {
    await User.destroy({ where: { id } });
};
module.exports = {
    findUser,
    createUser,
    findAll,
    findById,
    deleteUser,
};