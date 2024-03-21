const { Router } = require('express');
const productsRouter = require('./productsRouter');
const usersRouter = require('./usersRouter');
const salesRouter = require('./salesRouter');

const router = Router();

router.use('/users', usersRouter);
router.use('/products', productsRouter);
router.use('/sales', salesRouter);

module.exports = router;
