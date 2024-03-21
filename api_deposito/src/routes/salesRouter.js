const { Router } = require('express');

const getOneByIdHandler = require('../handlers/sales/getOneByIdHandler');

const addItemHandler = require('../handlers/sales/addItemHandler');
const removeItemHandler = require('../handlers/sales/removeItemHandler');

const salesRouter = Router();

salesRouter.get('/:saleid', getOneByIdHandler);

salesRouter.post('/add_item', addItemHandler);
salesRouter.delete('/remove_item', removeItemHandler);

module.exports = salesRouter;
