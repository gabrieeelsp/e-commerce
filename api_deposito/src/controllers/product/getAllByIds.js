const { Op } = require('sequelize');
const { Product } = require('../../db');

module.exports = async ({ ids }) => {
    console.log(typeof ids);
    const resp = await Product.findAll({
        where: {
            id: {
                [Op.in]: ids,
            },
        },
    });

    return resp;
};
