const blogPostService = require('../services/BlogPost.service');

const findAll = async (_req, res) => {
    const { message } = await blogPostService.getAll();
    res.status(200).json(message);
};
const createPost = async (req, res) => {
    const post = req.body;
    const { user: { data: { dataValues: { id } } } } = req;
    const result = await blogPostService.createPost(id, post);
    res.status(201).json(result);
};
module.exports = {
    findAll,
    createPost,
};