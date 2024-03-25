const { Router } = require('express');

const getOneByIdHandler = require('../handlers/sales/getOneByIdHandler');

const addItemHandler = require('../handlers/sales/addItemHandler');
const removeItemHandler = require('../handlers/sales/removeItemHandler');
const delayMiddleware = require('../middlewares/delay');

const salesRouter = Router();

salesRouter.get('/:saleid', getOneByIdHandler);

salesRouter.post('/add_item', delayMiddleware, addItemHandler);
salesRouter.delete('/remove_item', delayMiddleware, removeItemHandler);

module.exports = salesRouter;
