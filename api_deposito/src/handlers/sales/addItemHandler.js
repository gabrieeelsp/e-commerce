const addItem = require('../../controllers/sales/addItem');

module.exports = async (req, res) => {
    const { saleid: saleId, productid: productId, quantity } = req.body;

    try {
        const resp = await addItem({ saleId, productId, quantity });
        return res.status(200).json(resp);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
