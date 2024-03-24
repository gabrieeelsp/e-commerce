const { default: slugify } = require('slugify');
const { Brand } = require('../db');

module.exports = () => {
    const items = [
        { name: 'Parpen' }, // 1
        { name: 'Cooper' }, // 2
        { name: 'Mapsa' }, // 3
        { name: 'Ledevit' }, // 4
        { name: 'Natalia' }, // 5
        { name: 'Decor Magic' }, // 6
    ];

    try {
        Brand.bulkCreate(
            items.map((item) => {
                return {
                    ...item,
                    url: slugify(item.name, { lower: true, strict: true }),
                };
            }),
        );
    } catch (error) {
        throw new Error(error.message);
    }
};
