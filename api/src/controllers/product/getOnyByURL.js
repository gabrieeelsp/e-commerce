const { Product } = require('../../db');

module.exports = async (url) => {
    const item = await Product.findOne({
        where: {
            url,
        },
    });

    if (!item) throw new Error('No se encontro una instancia con ese URL');

    return item;
};
