const axios = require('axios');

const httpService = axios.create({
    baseURL: 'http://localhost:8081/',
});

module.exports = httpService;
