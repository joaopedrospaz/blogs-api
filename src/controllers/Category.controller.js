const createService = require('../services/Category.service');

const newCategory = async (req, res) => {
    const { name } = req.body;

    if (!name) return res.status(400).json({ message: '"name" is required' });

    const { message } = await createService.createCategory(name);

    return res.status(201).json(message);
};

module.exports = {
    newCategory,
};
