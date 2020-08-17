const express = require('express');
const devController = require('./controller/devController');
const likeController = require('./controller/likeController');
const dislikeController = require('./controller/dislikeController');
const chatController = require('./controller/chatController');

const routes = express.Router();

routes.get('/devs', devController.index);
routes.post('/devs', devController.store);

routes.post('/devs/:devId/likes', likeController.store);
routes.post('/devs/:devId/dislikes', dislikeController.store);

routes.get('/chat', chatController.index);

module.exports = routes;