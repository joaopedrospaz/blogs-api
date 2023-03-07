const express = require('express');
const BlogPostController = require('../controllers/BlogPost.controller');
const validateBlogPost = require('../middlewares/validateBlogPost');
const validateDeletePost = require('../middlewares/validateDeletePost');
const validateToken = require('../middlewares/validateToken');
const validateUpdatePost = require('../middlewares/validateUpdatePost');

const blogPostRouter = express.Router();

blogPostRouter.get('/', validateToken, BlogPostController.findAll);
blogPostRouter.get('/:id', validateToken, BlogPostController.findById);
blogPostRouter.post('/', validateToken, validateBlogPost, BlogPostController.createPost);
blogPostRouter.put('/:id', validateToken, validateUpdatePost, BlogPostController.updatePost);
blogPostRouter.delete('/:id', validateToken, validateDeletePost, BlogPostController.deletePost);

module.exports = blogPostRouter;
