const { Category } = require('../models');

const createCategory = async (name) => {
    const newCategory = await Category.create({ name });
    return { type: null, message: newCategory.dataValues };
};

const getAll = async () => {
    const allCategories = await Category.findAll();
    return { type: null, message: allCategories };
};

const findById = async (id) => {
    const category = await Category.findByPk(id);
    return category;
};
module.exports = {
    createCategory,
    getAll,
    findById,
};