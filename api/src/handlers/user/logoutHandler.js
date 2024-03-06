const logout = require('../../controllers/user/logout');

const logoutHandler = async (req, res) => {
    const { user: id } = req;

    try {
        const resp = await logout(id);
        if (resp)
            return res.status(200).json({ message: 'Logout satisfactorio' });
        return undefined;
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = logoutHandler;
