const blogPostService = require('../services/BlogPost.service');

const findAll = async (_req, res) => {
    const { message } = await blogPostService.getAll();
    res.status(200).json(message);
};
const findById = async (req, res) => {
    const { id } = req.params;
    const { type, message } = await blogPostService.getById(id);
    if (type) return res.status(404).json({ message });
   return res.status(200).json(message);
};
const createPost = async (req, res) => {
    const post = req.body;
    const { user: { data: { dataValues: { id } } } } = req;
    const result = await blogPostService.createPost(id, post);
    res.status(201).json(result);
};

const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

     await blogPostService.updatePost(id, title, content);
    const { message } = await blogPostService.getById(id);
    res.status(200).json(message);
};

const deletePost = async (req, res) => {
    const { user: { data: { dataValues: { id } } } } = req;

     await blogPostService.deletePost(id);
    res.status(204).end();
};

const seacrhPost = async (req, res) => {
    const { q } = req.query;
    console.log(q);
    const result = await blogPostService.searchProduct(q);

    res.status(200).json(result);
};
module.exports = {
    findAll,
    createPost,
    findById,
    updatePost,
    deletePost,
    seacrhPost,
};