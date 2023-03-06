const userService = require('../services/User.service');
const { createToken } = require('../utils/token');

const login = async (req, res) => {
    const { email, password } = req.body;

    const { type, message } = await userService.findUser({ email, password });
    
    if (type) return res.status(400).json({ message: 'Invalid fields' });
    const { password: _, ...userWithoutPassword } = message;
    const data = createToken(userWithoutPassword);

  return res.status(200).json({ token: data });
};

const createUSer = async (req, res) => {
    const newUSer = req.body;
    const { type, message } = await userService.createUser(newUSer);
//     if (type.code === 'ER_DUP_ENTRY') {
//  return res.status(400)
//     .json({ message: 'User already registered' }); 
// } 
    if (type) return res.status(409).send({ message: 'User already registered' });

    const { password: _, ...userWithoutPassword } = message;
    const token = createToken(userWithoutPassword);
    
    return res.status(201).json({ token });
};
module.exports = {
    login,
    createUSer,
};