const login = require('../../controllers/user/login');
const {
    validateUserEmail,
    validateUserPassword,
} = require('../../utils/validations');

module.exports = async (req, res) => {
    const { email, password } = req.body;

    const emailError = validateUserEmail(email);
    const passwordError = validateUserPassword(password);

    if (emailError || passwordError) {
        const errors = {};
        if (emailError) errors.email = emailError;
        if (passwordError) errors.password = passwordError;

        return res.status(400).json({ errors });
    }

    try {
        const resp = await login(email, password);

        return res.status(200).json(resp);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};
