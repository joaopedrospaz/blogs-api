const userService = require('../services/User.service');
const { createToken } = require('../utils/token');

const login = async (req, res) => {
    const { email, password } = req.body;

    const user = await userService.findUser({ email, password });

    if (!user) return res.status(400).send({ message: 'Invalid fields' });
const { password: _, ...userWithoutPassword } = user;
    const data = createToken(userWithoutPassword);

    res.status(200).json({ token: data });
};

module.exports = {
    login,
};