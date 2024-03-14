const { Router } = require('express');
const getAllHandler = require('../handlers/subrubro/getAllHandler');

const subrubrosRouter = Router();

subrubrosRouter.get('/', getAllHandler);

module.exports = subrubrosRouter;
