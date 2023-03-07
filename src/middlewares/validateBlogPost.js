const categoryService = require('../services/Category.service');

const validateBlogPost = async (req, res, next) => {
    const { title, content, categoryIds } = req.body;
  if (!title || !content || !categoryIds) {
     return res.status(400).json({ message: 'Some required fields are missing' });
    }
    
    const findCategory = await Promise
    .all(categoryIds.map(async (e) => categoryService.findById(e)));

    const verifyCategory = findCategory.some((e) => !e);
    if (verifyCategory) {
 return res.status(400)
    .json({ message: 'one or more "categoryIds" not found' }); 
}
  
    next();
};

module.exports = validateBlogPost;