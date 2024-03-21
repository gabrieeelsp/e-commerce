const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const generateToken = (payload) => {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '10m' });
};

const verifyToken = (token, ignoreExpiration = false) => {
    try {
        const decoded = jwt.verify(token, JWT_SECRET, { ignoreExpiration });
        return { valid: true, payload: decoded };
    } catch (error) {
        return { valid: false, error: error.message };
    }
};

module.exports = {
    generateToken,
    verifyToken,
};
