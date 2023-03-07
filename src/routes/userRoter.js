const express = require('express');
const userController = require('../controllers/User.controller');
const validateCreateUser = require('../middlewares/validateCreateUSer');
const validateDeleteUser = require('../middlewares/validateDeleteUser');
const validateToken = require('../middlewares/validateToken');

const userRouter = express.Router();

userRouter.post('/', validateCreateUser, userController.createUSer);
userRouter.delete('/me', validateToken, validateDeleteUser, userController.deleteUser);
userRouter.get('/', validateToken, userController.getAll);
userRouter.get('/:id', validateToken, userController.getById);
module.exports = userRouter;