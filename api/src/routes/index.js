const { Router } = require('express');
const productsRouter = require('./productsRouter');
const usersRouter = require('./usersRouter');

const router = Router();

router.use('/users', usersRouter);
router.use('/products', productsRouter);

module.exports = router;
