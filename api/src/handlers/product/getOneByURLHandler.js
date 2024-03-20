const getOnyByURL = require('../../controllers/product/getOnyByURL');

module.exports = async (req, res) => {
    const { url } = req.params;

    try {
        const product = await getOnyByURL(url);
        return res.status(200).json(product);
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};
