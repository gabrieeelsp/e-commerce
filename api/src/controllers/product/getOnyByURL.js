const axios = require('axios');
const { Product } = require('../../db');
const httpService = require('../../services/http.service');

module.exports = async (url) => {
    const item = await Product.findOne({
        where: {
            url,
        },
    });

    if (!item)
        throw new Error('No se encontro una instancia con ese URL Local');

    // const resp = await axios.get(
    //     `https://plastitodo-prod.backhub.net.ar/api/v1/saleproducts/5`,
    // );

    const resp = await axios.get(`http://localhost:8081/products/4`);
    console.log(resp);

    return item;
};
