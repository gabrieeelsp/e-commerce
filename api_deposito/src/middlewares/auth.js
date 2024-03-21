const jwtService = require('../services/jwtService');
const { User } = require('../db');

const verifyToken = async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token)
        return res.status(401).json({ message: 'Token no proporcionado' });

    const resp = jwtService.verifyToken(token);

    if (!resp.valid) {
        if (resp.error === 'jwt expired')
            return res.status(403).json({ message: 'Token caducado' });
        return res.status(403).json({ message: 'Token inválido' });
    }

    const user = await User.findByPk(resp.payload.id, {
        attributes: ['tokensRevokedAt'],
    });

    if (!user) return res.status(401).json({ message: 'Token inválido' });

    if (resp.payload.createdAt < user.tokensRevokedAt.getTime())
        return res.status(401).json({ message: 'Token inválido' });

    req.user = resp.payload.id;

    return next();
};

module.exports = verifyToken;
