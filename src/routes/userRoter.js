const express = require('express');
const userController = require('../controllers/User.controller');
const validateCreateUser = require('../middlewares/validateCreateUSer');
const validateToken = require('../middlewares/validateToken');

const userRouter = express.Router();

userRouter.post('/', validateCreateUser, userController.createUSer);
userRouter.get('/', validateToken, userController.getAll);
userRouter.get('/:id', validateToken, userController.getById);
module.exports = userRouter;