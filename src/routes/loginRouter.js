const express = require('express');
const userController = require('../controllers/User.controller');
const { validateUser } = require('../middlewares/validateUser');

const loginRouter = express.Router();

loginRouter.post('/', validateUser, userController.login);
module.exports = loginRouter;