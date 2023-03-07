const userService = require('../services/User.service');
const { createToken } = require('../utils/token');

const login = async (req, res) => {
    const { email, password } = req.body;

    const { type, message } = await userService.findUser({ email, password });
    
    if (type) return res.status(400).json({ message: 'Invalid fields' });
    const { password: _, ...userWithoutPassword } = message;
    const data = createToken(userWithoutPassword);
    req.user = userWithoutPassword;
  return res.status(200).json({ token: data });
};

const createUSer = async (req, res) => {
    const newUSer = req.body;
    const { type, message } = await userService.createUser(newUSer);
    if (type === 'SequelizeUniqueConstraintError') {
 return res.status(409)
    .json({ message: 'User already registered' }); 
} 
    if (type) return res.status(400).send({ message });

    const { password: _, ...userWithoutPassword } = message;
    const token = createToken(userWithoutPassword);
    req.user = userWithoutPassword;
    return res.status(201).json({ token });
};

const getAll = async (_req, res) => {
    const { message } = await userService.findAll();

    res.status(200).json(message);
};
const getById = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    const { type, message } = await userService.findById(id);

    if (type) return res.status(404).json({ message });

    res.status(200).json(message);
};

const deleteUser = async (req, res) => {
    const { user: { data: { dataValues: { id: userId } } } } = req;
    
    await userService.deleteUser(userId);

    res.status(204).end();
};
module.exports = {
    login,
    createUSer,
    getAll,
    getById,
    deleteUser,
};