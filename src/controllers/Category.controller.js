const categoryService = require('../services/Category.service');

const newCategory = async (req, res) => {
    const { name } = req.body;

    if (!name) return res.status(400).json({ message: '"name" is required' });

    const { message } = await categoryService.createCategory(name);

    return res.status(201).json(message);
};

const getAll = async (_req, res) => {
    const { message } = await categoryService.getAll();

    return res.status(200).json(message);
};

module.exports = {
    newCategory,
    getAll,
};
