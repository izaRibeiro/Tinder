const express = require('express');
const devController = require('./controller/devController');
const likeController = require('./controller/likeController');
const dislikeController = require('./controller/dislikeController');

const routes = express.Router();

routes.post('/devs', devController.store);
routes.post('/devs/:devId/likes', likeController.store);
routes.post('/devs/:devId/dislikes', dislikeController.store);

module.exports = routes;