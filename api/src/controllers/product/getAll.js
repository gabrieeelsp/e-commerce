const { Sequelize } = require('sequelize');
const { Product, Subrubro, Rubro } = require('../../db');

const getFilterList = (options) => {
    const filterList = {};

    if (options.name) {
        const q = options.name.replaceAll(' ', '%').toLowerCase();
        filterList.name = Sequelize.where(
            Sequelize.fn('lower', Sequelize.col('product.name')),
            'like',
            `%${q}%`,
        );
    }

    if (options.subrubroId) {
        filterList.subrubroId = options.subrubroId;
    }

    if (options.brandId) {
        filterList.brandId = options.brandId;
    }

    return filterList;
};

const getFilterRubro = (options) => {
    if (options.rubroId) {
        return { rubroId: options.rubroId };
    }

    return null;
};

const getOrderList = (options) => {
    const orderList = [];

    if (options.orderby) {
        orderList.push([
            options.orderby,
            options.orderdir ? options.orderdir : 'ASC',
        ]);
    }
    return orderList;
};

const getOffset = (limit, page) => {
    if (!limit) return 0;
    return limit * (page - 1);
};

const getTotalPages = (limit, totalRecords) => {
    return Math.ceil(totalRecords / limit);
};

const getNextPage = (limit, page, totalRecords) => {
    if (page === getTotalPages(limit, totalRecords)) return null;

    return page + 1;
};

const getPrevPage = (page) => {
    if (page === 1) return null;

    return page - 1;
};

const getIncludeOption = (options) => {
    const includes = [];

    if (getFilterRubro(options))
        includes.push({
            model: Subrubro,
            include: {
                model: Rubro,
            },
            where: getFilterRubro(options),
        });

    return includes;
};

module.exports = async (options, limit, page = 1) => {
    const respBrands = await Product.findAll({
        attributes: [
            Sequelize.fn('DISTINCT', Sequelize.col('brandId')),
            'brandId',
        ],
        where: getFilterList(options),
    });

    const { count, rows } = await Product.findAndCountAll({
        include: getIncludeOption(options),
        where: getFilterList(options),
        order: getOrderList(options),
        offset: getOffset(limit, page),
        limit,
    });

    return {
        data: rows,
        meta: {
            brands: respBrands.map((product) => product.brandId),
        },
        pagination: {
            total_records: count,
            current_page: limit ? page : null,
            total_pages: limit ? getTotalPages(limit, count) : null,
            next_page: limit ? getNextPage(limit, page, count) : null,
            prev_page: limit ? getPrevPage(page) : null,
        },
    };
};
