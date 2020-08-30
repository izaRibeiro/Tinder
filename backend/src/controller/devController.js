const axios = require('axios');
const Dev = require('../model/Dev');

module.exports = { 

    async index(req, res){
        const { user } = req.headers;

        const loggedDev = await Dev.findById(user);

        const users = await Dev.find({
            $and: [
                { _id: { $ne: user} },
                { _id: { $nin: loggedDev.likes }},
                { _id: { $nin: loggedDev.dislikes}}
            ],
        });

        return res.json(users);
    },

    async store(req, res){
        const { username, latitude, longitude, phoneNumber } = req.body;
        
        const userExists = await Dev.findOne({ user: username });

        if(userExists){
            return res.json(userExists);
        }
        if(phoneNumber != null){
            const response = await axios.get(`https://api.github.com/users/${username}`);

            const {name, bio, avatar_url: avatar} = response.data;
    
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }
    
            const dev = await Dev.create({
                name,
                user: username,
                bio,
                avatar,
                location,
                phoneNumber
            });
            return res.json(dev);
        }
        return res.status(400).json({message: "Você ainda não possui cadastro no sistema" })
    }
};