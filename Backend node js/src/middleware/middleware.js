const jwt = require('jwt-simple');
const moment = require('moment');
const jwtSecret = require('../config/jwt')

const checkToken = (req, res, next) =>{
    if(!req.headers['user_token'])
        return res.json({
            error: "Eso requierido el Headers"
        });

        const token = req.headers['user_token'];
        let payload  = null;

        try{
            payload = jwt.decode(token, jwtSecret)
        }catch (err){
            return res.json({
                error:'Otken Invalido'
            });
        };

        if(moment().unix() > payload.expiresAt){
            return res.json({error: 'Expiro el Token'})
        };
    
        res.userId = payload.userId;

        next();
};

module.exports = {
    checkToken : checkToken
}