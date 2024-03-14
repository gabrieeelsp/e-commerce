const { Subrubro } = require('../db');

module.exports = () => {
    const items = [
        // 1 Ingredientes
        { name: 'Bizcochuelos', rubroId: 1 }, // 1
        { name: 'Premezclas', rubroId: 1 }, // 2
        { name: 'Granas', rubroId: 1 }, // 3

        // 2 Herramientas
        { name: 'Cortantes', rubroId: 2 }, // 4
        { name: 'Bases y Bandejas', rubroId: 2 }, // 5
        { name: 'Mangas', rubroId: 2 }, // 6
    ];

    try {
        Subrubro.bulkCreate(items);
    } catch (error) {
        throw new Error(error.message);
    }
};
