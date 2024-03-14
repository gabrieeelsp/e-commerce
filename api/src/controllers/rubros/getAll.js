const { Rubro } = require('../../db');

const getFilterList = (options) => {
    const filterList = {};

    return filterList;
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

module.exports = async (options, limit, page = 1) => {
    const { count, rows } = await Rubro.findAndCountAll({
        where: getFilterList(options),
        order: getOrderList(options),
        offset: getOffset(limit, page),
        limit,
    });

    return {
        data: rows,
        pagination: {
            total_records: count,
            current_page: limit ? page : null,
            total_pages: limit ? getTotalPages(limit, count) : null,
            next_page: limit ? getNextPage(limit, page, count) : null,
            prev_page: limit ? getPrevPage(page) : null,
        },
    };
};
