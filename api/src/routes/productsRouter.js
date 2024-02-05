const { Router } = require('express');
const getAllHandler = require('../handlers/product/getAllHandler');

const productsRouter = Router();

productsRouter.get('/', getAllHandler);

module.exports = productsRouter;
