const { Rubro } = require('../db');

module.exports = () => {
    const items = [
        { name: 'Ingredientes' }, // 1
        { name: 'Herramientas' }, // 2
    ];

    try {
        Rubro.bulkCreate(items);
    } catch (error) {
        throw new Error(error.message);
    }
};
