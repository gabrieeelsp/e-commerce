const { Router } = require('express');
const getAllHandler = require('../handlers/product/getAllHandler');
const getOneByIdHandler = require('../handlers/product/getOneByIdHandler');
const getALLByIdsHandler = require('../handlers/product/getALLByIdsHandler');

const productsRouter = Router();

productsRouter.get('/', getAllHandler);
productsRouter.get('/get_by_ids', getALLByIdsHandler);
productsRouter.get('/:id', getOneByIdHandler);

module.exports = productsRouter;
