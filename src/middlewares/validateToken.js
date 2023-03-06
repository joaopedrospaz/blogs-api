const { verifyToken } = require('../utils/token');

const validateToken = (req, res, next) => {
    try {
        const { authorization: token } = req.headers;
        if (!token) return res.status(401).json({ message: 'Token not found' });

        const result = verifyToken(token);
        req.user = result;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
}; 

module.exports = validateToken;