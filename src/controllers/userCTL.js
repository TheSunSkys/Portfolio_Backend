const { Respond, ErrRespond } = require('../respondHandle/index')
const userModel = require('../models/userModel')
module.exports = {
    login
}

async function login(req, res){
    const { username, password } = req.body
    if(!username || !password){
        return ErrRespond(res, 400, 'Bad Request')
    }else{
        const [ err, data ] = await userModel.login(username, password)
        if(err){
            return ErrRespond(res, 500, err)
        }else{
            return Respond(res, 200, data)
        }
    }
}