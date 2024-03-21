const { orderByProductValues, orderDirProductValues } = require('./constants');

const validateOrderByProducts = (orderBy) => {
    if (!orderByProductValues.includes(orderBy.toLowerCase()))
        return 'El campo orderBy no posee un valor erroneo';
    return null;
};

const validateOrderDirProducts = (orderDir) => {
    if (!orderDirProductValues.includes(orderDir.toLowerCase()))
        return 'El campo orderDir no posee un valor erroneo';
    return null;
};

const validateIsNumber = (n) => {
    if (isNaN(n)) return 'No es un número';

    return null;
};

const validateNumberGT0 = (limit) => {
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(limit)) return 'Debe ingresar un número.';

    if (Number(limit <= 0)) return 'De ser un valor mayor que 0';
    return null;
};

const validateUserEmail = (email) => {
    if (!email) return 'El email no puede quedar vacío';

    const regexEmail = /^\w+([\3.-]?\w+)*@\w+([\.-]?\w+)*(\.\w+)+$/;

    if (!regexEmail.test(email)) return 'Email inválido.';

    return null;
};

const validateUserPassword = (password) => {
    if (!password) return 'El password no puede quedar vacío';

    return null;
};

const validateUserName = (name) => {
    if (!name) return 'El nombre no puede quedar vacío';

    return null;
};

module.exports = {
    validateOrderByProducts,
    validateOrderDirProducts,
    validateNumberGT0,
    validateUserEmail,
    validateUserPassword,
    validateUserName,
    validateIsNumber,
};
