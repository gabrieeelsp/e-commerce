const { Product } = require('../../db');

module.exports = async (id) => {
    const item = await Product.findByPk(id);

    if (!item) throw new Error('No se encontro una instancia con ese ID');

    return item;
};
