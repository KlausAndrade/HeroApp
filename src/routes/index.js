const express = require('express');
const OngController = require('../controllers/OngController');
const IncidentController = require('../controllers/IncidentController');
const SessionController = require('../controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.store);

routes.get('/ongs', OngController.index);
routes.get('/ongs/incidents', OngController.incidents);
routes.post('/ongs', OngController.store)

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.store)
routes.delete('/incidents/:id', IncidentController.destroy)

module.exports = routes;
