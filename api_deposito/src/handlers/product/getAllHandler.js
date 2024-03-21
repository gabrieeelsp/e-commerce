const {
    validateOrderByProducts,
    validateOrderDirProducts,
    validateNumberGT0,
} = require('../../utils/validations');
const getAll = require('../../controllers/product/getAll');

module.exports = async (req, res) => {
    const { name, orderby, orderdir, limit, page, subrubroid, rubroid } =
        req.query;

    // validaciones
    const errorOrderBy = orderby ? validateOrderByProducts(orderby) : null;
    const errorOrderDir = orderdir ? validateOrderDirProducts(orderdir) : null;
    const errorLimit = limit ? validateNumberGT0(limit) : null;
    const errorPage = page ? validateNumberGT0(page) : null;
    const errorSubrubroId = subrubroid ? validateNumberGT0(subrubroid) : null;
    const errorRubroId = rubroid ? validateNumberGT0(rubroid) : null;

    if (
        errorOrderBy ||
        errorOrderDir ||
        errorLimit ||
        errorPage ||
        errorSubrubroId ||
        errorRubroId
    ) {
        const errors = {};
        if (errorOrderBy) errors.orderby = errorOrderBy;
        if (errorOrderDir) errors.orderdir = errorOrderDir;
        if (errorLimit) errors.limit = errorLimit;
        if (errorPage) errors.page = errorPage;
        if (errorSubrubroId) errors.subrubroid = errorSubrubroId;
        if (errorRubroId) errors.rubroid = errorRubroId;
        return res.status(400).json({ errors });
    }

    const orderByValue = orderby ? orderby.toLowerCase() : orderby;
    const orderDirValue = orderdir ? orderdir.toLowerCase() : orderdir;

    try {
        const resp = await getAll(
            {
                name,
                orderby: orderByValue,
                orderdir: orderDirValue,
                subrubroId: subrubroid,
                rubroId: rubroid,
            },
            limit ? Number(limit) : undefined,
            page ? Number(page) : undefined,
        );

        // formatear respuesta
        return res.status(200).json(resp);
    } catch (error) {
        return res.status(500).json({ error: error.messge });
    }
};
