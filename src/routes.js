const express = require('express');

const routes = express.Router();

const SessionController = require('./app/controllers/SessionController');
const authMiddleware = require('./app/middleware/auth');

routes.post('/sessions', SessionController.store);
routes.use(authMiddleware);
routes.get('/dashboard', (request, response) => response.status(200).send());

module.exports = routes;
