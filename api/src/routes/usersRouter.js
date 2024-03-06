const { Router } = require('express');
const auth = require('../middlewares/auth');
const loginHandler = require('../handlers/user/loginHandler');
const registerHandler = require('../handlers/user/registerHandler');
const logoutHandler = require('../handlers/user/logoutHandler');

const usersRouter = Router();

usersRouter.post('/signin', loginHandler);
usersRouter.post('/signup', registerHandler);
usersRouter.post('/signout', auth, logoutHandler);

module.exports = usersRouter;
