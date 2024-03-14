const { Router } = require('express');
const getAllHandler = require('../handlers/rubro/getAllHandler');

const rubrosRouter = Router();

rubrosRouter.get('/', getAllHandler);

module.exports = rubrosRouter;
