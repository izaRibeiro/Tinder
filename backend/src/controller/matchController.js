const axios = require('axios');
const Dev = require('../model/Dev');

module.exports = { 
    async find(req, res){
        const { id } = req.headers;

        const loggedDev = await Dev.findById(id);
        console.log(loggedDev)

        return res.json(loggedDev.matchs  ? loggedDev.matchs : null);
    },
};