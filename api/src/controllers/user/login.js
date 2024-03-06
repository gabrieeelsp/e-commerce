const bcrypt = require('bcrypt');
const jwtService = require('../../services/jwtService');
const { User } = require('../../db');

module.exports = async (email, password) => {
    const user = await User.findOne({
        where: { email },
    });

    if (!user) throw new Error('Email o Password incorrecto.');

    if (!bcrypt.compareSync(password, user.password)) {
        throw new Error('Email o Password incorrecto.');
    }

    delete user.dataValues.password;
    delete user.dataValues.tokensRevokedAt;

    const token = jwtService.generateToken({
        id: user.id,
        createdAt: Date.now(),
    });

    user.token = token;

    return { ...user.dataValues, token };
};
