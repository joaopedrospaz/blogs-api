const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;
const jwtConfig = { algorithm: 'HS256', expiresIn: '7d' };

const createToken = (data) => jwt.sign({ data }, secret, jwtConfig);

const verifyToken = (token) => jwt.verify(token, secret);

module.exports = {
    createToken,
    verifyToken,
};
