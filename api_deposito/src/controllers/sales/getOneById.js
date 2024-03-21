const { Sale, Saleitem, Product } = require('../../db');

module.exports = async ({ saleId }) => {
    const sale = await Sale.findByPk(saleId, {
        include: {
            model: Saleitem,
            attributes: ['quantity'],
            include: {
                model: Product,
            },
        },
    });

    if (!sale) throw new Error('No se encontro una venta con ese id');

    return sale;
};
