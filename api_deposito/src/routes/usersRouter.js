const { Router } = require('express');
const auth = require('../middlewares/auth');
const loginHandler = require('../handlers/user/loginHandler');
const registerHandler = require('../handlers/user/registerHandler');
const logoutHandler = require('../handlers/user/logoutHandler');
const meHandler = require('../handlers/user/meHandler');
const refreshHandler = require('../handlers/user/refresHandler');

const usersRouter = Router();

usersRouter.post('/signin', loginHandler);
usersRouter.post('/signup', registerHandler);
usersRouter.post('/signout', auth, logoutHandler);
usersRouter.get('/me', auth, meHandler);
usersRouter.post('/refresh', refreshHandler);

module.exports = usersRouter;
