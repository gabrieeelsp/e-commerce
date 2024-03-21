const { User } = require('../../db');

const logout = async (userId) => {
    const user = await User.findByPk(userId);

    if (!user)
        throw new Error(
            'No se encontro una instancia con el id proporcionado.',
        );

    user.tokensRevokedAt = Date.now();

    try {
        await user.save();

        return true;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = logout;
