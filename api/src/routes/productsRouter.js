const { Router } = require('express');
const getAllHandler = require('../handlers/product/getAllHandler');
const getOneByURLHandler = require('../handlers/product/getOneByURLHandler');

const productsRouter = Router();

productsRouter.get('/', getAllHandler);
productsRouter.get('/:url', getOneByURLHandler);

module.exports = productsRouter;
