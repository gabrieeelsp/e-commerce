const jwtService = require('../services/jwtService');

const verifySale = (req, res, next) => {
    const { token } = req.body;

    const resp = jwtService.verifyToken(token, true);

    console.log(resp);

    return next();
};
