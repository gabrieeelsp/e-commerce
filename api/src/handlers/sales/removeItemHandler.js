const removeItem = require('../../controllers/sales/removeItem');

module.exports = async (req, res) => {
    const { saleid: saleId, productid: productId } = req.body;
    console.log(saleId, productId);

    try {
        await removeItem({ saleId, productId });
        return res.status(200).json({ id: productId });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
