const { getById } = require('../services/BlogPost.service');

const validateUpdatePost = async (req, res, next) => {
    const { id } = req.params;
    const { title, content } = req.body;
    const { user: { data: { dataValues: { id: userId } } } } = req;
    const { message } = await getById(id);

    if (userId !== message.user.id) return res.status(401).json({ message: 'Unauthorized user' });

    if (!title || !content) {
 return res.status(400)
    .json({ message: 'Some required fields are missing' }); 
}
    next();
};

module.exports = validateUpdatePost;