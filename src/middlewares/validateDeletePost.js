const { getById } = require('../services/BlogPost.service');

const validateDeletePost = async (req, res, next) => {
    const { user: { data: { dataValues: { id: userId } } } } = req;
    const { id } = req.params;
    const { type, message } = await getById(id);
    if (type) return res.status(404).json({ message: 'Post does not exist' });

    if (userId !== message.userId) return res.status(401).json({ message: 'Unauthorized user' });
    
    next();
};

module.exports = validateDeletePost;