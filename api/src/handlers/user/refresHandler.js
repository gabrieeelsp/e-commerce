const refresh = require('../../controllers/user/refresh');

const refreshHandler = async (req, res) => {
    const token = req.headers.authorization;

    try {
        const resp = await refresh(token);

        return res.status(200).json({ token: resp });
    } catch (error) {
        res.status(403).json({ error: error.message });
    }
};

module.exports = refreshHandler;
