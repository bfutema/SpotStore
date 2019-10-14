const express = require('express');
const routes = express.Router();

const SessionController = require('./app/controllers/SessionController');

routes.post('/register', SessionController.store);
routes.post('/authenticate', SessionController.auth);

module.exports = routes;