const { Router } = require('express');
const getAllHandler = require('../handlers/brand/getAllHandler');

const brandsRouter = Router();

brandsRouter.get('/', getAllHandler);

module.exports = brandsRouter;
