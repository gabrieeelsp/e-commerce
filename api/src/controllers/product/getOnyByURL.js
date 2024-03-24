const { Product, Brand } = require('../../db');

module.exports = async (url) => {
    const item = await Product.findOne({
        include: [
            {
                model: Brand,
            },
        ],
        where: {
            url,
        },
    });

    if (!item) throw new Error('No se encontro una instancia con ese URL');

    return item;
};
