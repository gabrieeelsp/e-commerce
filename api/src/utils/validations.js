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

const validateNumberGT0 = (limit) => {
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(limit)) return 'Debe ingresar un número.';

    if (Number(limit <= 0)) return 'De ser un valor mayor que 0';
    return null;
};

module.exports = {
    validateOrderByProducts,
    validateOrderDirProducts,
    validateNumberGT0,
};
