const { User } = require('../../db');

const me = async (id) => {
    const user = await User.findByPk(id);

    if (!user) throw new Error('No se encontro un usuario con ese id.');

    delete user.dataValues.password;
    delete user.dataValues.tokensRevokedAt;

    return user;
};

module.exports = me;
