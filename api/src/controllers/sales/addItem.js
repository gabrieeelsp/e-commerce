const { Sale, Saleitem, Product } = require('../../db');

module.exports = async ({ saleId, productId, quantity }) => {
    let sale = null;
    let saleItem = null;
    if (saleId) {
        sale = await Sale.findByPk(saleId, {
            include: {
                model: Saleitem,
                include: {
                    model: Product,
                },
            },
        });

        if (!sale) throw new Error('No se encontro una venta con esa id');

        saleItem = sale.saleitems.find((item) => item.productId === productId);
    } else {
        sale = await Sale.create({});
    }

    if (!saleItem) {
        try {
            saleItem = await Saleitem.create({
                saleId: sale.id,
                productId,
                quantity,
            });
        } catch (error) {
            if (
                error.parent &&
                error.parent.constraint === 'saleitems_productId_fkey'
            )
                throw new Error('No se encontro un producto con esa id');

            throw error;
        }
    } else {
        saleItem.quantity += quantity;
        await saleItem.save();
    }

    return {
        saleId: saleId ? null : sale.id,
        saleitem: await Saleitem.findByPk(saleItem.id, {
            attributes: ['quantity'],
            include: {
                model: Product,
            },
        }),
    };
};
