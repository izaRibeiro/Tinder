const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');

const httpServer = express();
const server = require('http').Server(httpServer);
const io = require('socket.io')(server);

const  connectedUsers = {};

io.on('connection', socket => {
    console.log('Nova conexão', socket.id);
    const { user } = socket.handshake.query;

    console.log(user, socket.id);

    //connectedUsers[ID_USUARIO] = socket.id;
});

mongoose.connect('mongodb+srv://iza:iza@cluster0-xcpnh.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

httpServer.use((req, res, next) => {
    req.io = io;
    req.connectedUsers = connectedUsers;

    return next();
});

httpServer.use(cors());
httpServer.use(express.json())
httpServer.use(routes);

server.listen(3333);