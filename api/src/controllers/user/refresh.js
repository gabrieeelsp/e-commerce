const jwtService = require('../../services/jwtService');
const { User } = require('../../db');

const refresh = async (token) => {
    const resp = jwtService.verifyToken(token);
    if (resp.valid) return token;

    if (resp.error === 'jwt expired') {
        const response = jwtService.verifyToken(token, true);

        const user = await User.findByPk(response.payload.id, {
            attributes: ['tokensRevokedAt', 'id'],
        });

        if (!user) throw new Error('Token inválido');

        if (response.payload.createdAt < user.tokensRevokedAt.getTime())
            throw new Error('Token inválido');

        const newToken = jwtService.generateToken({
            id: user.id,
            createdAt: Date.now(),
        });

        return newToken;
    }

    throw new Error('Token inválido');
};

module.exports = refresh;
