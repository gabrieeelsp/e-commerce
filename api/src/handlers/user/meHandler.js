const me = require('../../controllers/user/me');

const meHandler = async (req, res) => {
    const { user: id } = req;

    try {
        const resp = await me(id);

        return res.status(200).json(resp);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

module.exports = meHandler;
