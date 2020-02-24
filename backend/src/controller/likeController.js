const Dev = require('../model/Dev');

module.exports = {    
    async store(req, res){
        console.log(req.params.devId);
        console.log(req.headers.user);
        try{
            const { devId } = req.params;
            const { user } = req.headers;
    
            const loggedDev = await Dev.findById(user);
            const targetDev = await Dev.findById(devId);
            
            if(!targetDev){
                return res.status(400).json({ error: 'O usuário não existe'});
            }
    
            if(targetDev.likes.includes(loggedDev._id)){
                console.log('Deu match');
            }
    
            loggedDev.likes.push(targetDev._id);
    
            await loggedDev.save();
    
            return res.json(loggedDev);
        }catch(erro){
            console.log(erro);
        }

    }
};