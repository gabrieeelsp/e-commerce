const { Router } = require('express');

const addItemHandler = require('../handlers/sales/addItemHandler');

const salesRouter = Router();

salesRouter.post('/add_item', addItemHandler);

module.exports = salesRouter;
