const express = require('express');
const categoryController = require('../controllers/Category.controller');
const validateToken = require('../middlewares/validateToken');

const categoryRouter = express.Router();

categoryRouter.post('/', validateToken, categoryController.newCategory);
categoryRouter.get('/', validateToken, categoryController.getAll);

module.exports = categoryRouter;