const create = require('../../controllers/user/create');
const {
    validateUserName,
    validateUserEmail,
    validateUserPassword,
} = require('../../utils/validations');

module.exports = async (req, res) => {
    const { name, email, password } = req.body;

    const nameError = validateUserName(name);
    const emailError = validateUserEmail(email);
    const passwordError = validateUserPassword(password);

    if (nameError || emailError || passwordError) {
        const errors = {};
        if (nameError) errors.name = nameError;
        if (emailError) errors.email = emailError;
        if (passwordError) errors.password = passwordError;

        return res.status(400).json({ errors });
    }

    try {
        const resp = await create({ name, email, password });

        return res.status(200).json(resp);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
