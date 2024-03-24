const { Router } = require('express');
const rubrosRouter = require('./rubrosRouter');
const subrubrosRouter = require('./subrubrosRouter');
const productsRouter = require('./productsRouter');
const usersRouter = require('./usersRouter');
const salesRouter = require('./salesRouter');
const brandsRouter = require('./brandsRouter');

const router = Router();

router.use('/users', usersRouter);
router.use('/rubros', rubrosRouter);
router.use('/subrubros', subrubrosRouter);
router.use('/products', productsRouter);
router.use('/sales', salesRouter);
router.use('/brands', brandsRouter);

module.exports = router;
