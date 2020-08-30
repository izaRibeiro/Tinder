const express = require('express');
const devController = require('./controller/devController');
const likeController = require('./controller/likeController');
const dislikeController = require('./controller/dislikeController');
const numberController = require('./controller/numberController');

const routes = express.Router();

routes.get('/devs', devController.index);
routes.post('/devs', devController.store);

routes.post('/devs/:devId/likes', likeController.store);
routes.post('/devs/:devId/dislikes', dislikeController.store);

routes.get('/number', numberController.find);

module.exports = routes;