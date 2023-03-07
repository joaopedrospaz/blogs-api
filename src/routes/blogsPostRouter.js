const express = require('express');
const BlogPostController = require('../controllers/BlogPost.controller');
const validateBlogPost = require('../middlewares/validateBlogPost');
const validateToken = require('../middlewares/validateToken');

const blogPostRouter = express.Router();

blogPostRouter.get('/', validateToken, BlogPostController.findAll);
blogPostRouter.post('/', validateToken, validateBlogPost, BlogPostController.createPost);

module.exports = blogPostRouter;
