const Chat = require('../model/Chat');

module.exports = {   
    async index(req, res){
        const { id } = req.headers;

        const message = await Chat.findById(id);

        // const messages = await Chat.find({
        //     $and: [
        //         { _id: { $ne: messsage} },
        //         { _id: { $nin: loggedDev.likes }},
        //         { _id: { $nin: loggedDev.dislikes}}
        //     ],
        // });

       

        console.log("Entroou")
        return res.json(message);
    },
};