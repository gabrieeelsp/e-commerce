const { Saleitem } = require('../../db');

module.exports = async ({ saleId, productId }) => {
    const saleItem = await Saleitem.findOne({
        where: {
            saleId,
            productId,
        },
    });

    if (!saleItem) throw new Error('No se encontro el item solicitado');

    await saleItem.destroy();

    return productId;
};
