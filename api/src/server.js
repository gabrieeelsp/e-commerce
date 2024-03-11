process.env.TZ = 'America/Argentina/Buenos_Aires';

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./routes');

const server = express();

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());
server.use('/', router);

module.exports = server;
