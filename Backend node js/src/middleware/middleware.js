const jwt = require('jwt-simple');
const moment = require('moment');
const jwtSecret = require('../config/jwt')

const checkToken = (req, res, next) =>{
    console.log(req.body['token_user'])
    if(!req.body['token_user'])
        return res.json({
            error: "Eso requierido el Headers"
        });

        const token = req.body['token_user'];
        let payload  = null;

        try{
            payload = jwt.decode(token, jwtSecret)
        }catch (err){
            return res.json({
                error:'token Invalido'
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