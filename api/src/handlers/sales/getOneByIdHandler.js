const getOneById = require('../../controllers/sales/getOneById');

module.exports = async (req, res) => {
    const { saleid: saleId } = req.params;

    try {
        const resp = await getOneById({ saleId });
        return res.status(200).json(resp);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};
