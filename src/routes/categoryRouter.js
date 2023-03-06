const express = require('express');
const { newCategory } = require('../controllers/Category.controller');
const validateToken = require('../middlewares/validateToken');

const categoryRouter = express.Router();

categoryRouter.post('/', validateToken, newCategory);

module.exports = categoryRouter;