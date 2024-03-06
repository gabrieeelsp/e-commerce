const { Router } = require('express');
const getAllHandler = require('../handlers/product/getAllHandler');
const auth = require('../middlewares/auth');

const productsRouter = Router();

productsRouter.get('/', auth, getAllHandler);

module.exports = productsRouter;
