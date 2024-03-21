const getAllByIds = require('../../controllers/product/getAllByIds');

module.exports = async (req, res) => {
    const { ids } = req.query;

    const arrayIds = ids.split(',');
    console.log(arrayIds);

    try {
        const response = await getAllByIds({ ids: arrayIds });

        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
