const {
    validateOrderByProducts,
    validateOrderDirProducts,
    validateNumberGT0,
} = require('../../utils/validations');
const getAll = require('../../controllers/rubros/getAll');

module.exports = async (req, res) => {
    const { orderby, orderdir, limit, page } = req.query;

    // validaciones
    const errorOrderBy = orderby ? validateOrderByProducts(orderby) : null;
    const errorOrderDir = orderdir ? validateOrderDirProducts(orderdir) : null;
    const errorLimit = limit ? validateNumberGT0(limit) : null;
    const errorPage = page ? validateNumberGT0(page) : null;

    if (errorOrderBy || errorOrderDir || errorLimit || errorPage) {
        const errors = {};
        if (errorOrderBy) errors.orderby = errorOrderBy;
        if (errorOrderDir) errors.orderdir = errorOrderDir;
        if (errorLimit) errors.limit = errorLimit;
        if (errorPage) errors.page = errorPage;
        return res.status(400).json({ errors });
    }

    const orderByValue = orderby ? orderby.toLowerCase() : orderby;
    const orderDirValue = orderdir ? orderdir.toLowerCase() : orderdir;

    try {
        const resp = await getAll(
            { orderby: orderByValue, orderdir: orderDirValue },
            limit ? Number(limit) : undefined,
            page ? Number(page) : undefined,
        );

        // formatear respuesta
        return res.status(200).json(resp);
    } catch (error) {
        return res.status(500).json({ error: error.messge });
    }
};
