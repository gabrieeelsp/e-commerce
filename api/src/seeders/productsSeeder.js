const { Product } = require('../db');

module.exports = () => {
    const items = [
        { name: 'Zapatillas de Trail Running Tracefinder' },
        { name: 'Zapatillas Ultrabounce' },
        { name: 'Zapatillas Hyperturf Adventure' },
        { name: 'Zapatillas Campus 00s' },
        { name: 'Zapatillas NMD_R1' },
        { name: 'Zapatillas Forum Bold' },
    ];

    try {
        Product.bulkCreate(items);
    } catch (error) {
        throw new Error(error.message);
    }
};
