const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;
const jwtConfig = { algorithm: 'HS256', expiresIn: '15min' };

const createToken = (data) => jwt.sign({ data }, secret, jwtConfig);

const verifyToke = (token) => jwt.verify(token, secret);

module.exports = {
    createToken,
    verifyToke,
};
