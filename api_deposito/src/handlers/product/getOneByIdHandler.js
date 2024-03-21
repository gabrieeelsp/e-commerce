const getOnyById = require('../../controllers/product/getOnyById');

module.exports = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await getOnyById(id);
        return res.status(200).json(product);
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};
