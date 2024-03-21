const bcryp = require('bcrypt');
const { User } = require('../../db');

module.exports = async (userData) => {
    const hashedPassword = userData.password
        ? bcryp.hashSync(userData.password, 10)
        : null;
    try {
        const user = await User.create({
            name: userData.name,
            email: userData.email,
            password: hashedPassword,
        });

        delete user.dataValues.password;
        delete user.dataValues.tokensRevokedAt;

        return user;
    } catch (error) {
        if (
            error.name === 'SequelizeUniqueConstraintError' &&
            error.errors[0].path === 'email'
        ) {
            throw new Error('El campo email se ya existe para otro usuario');
        }
        throw new Error(error.message);
    }
};
