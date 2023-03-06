const express = require('express');
const userController = require('../controllers/User.controller');
const validateCreateUser = require('../middlewares/validateCreateUSer');

const userRouter = express.Router();

userRouter.post('/', validateCreateUser, userController.createUSer);
module.exports = userRouter;