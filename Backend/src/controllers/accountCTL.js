const { Respond, ErrRespond } = require('../respondHandle/index')
const accountModel = require('../models/accountModel')
module.exports = {
    login,
    getAccounts,
    insertAccount
}

async function login(req, res){
    const {username, password} = req.body
    if(!username || !password){
        return ErrRespond(res, 400, 'Bad Request')
    }else{
        const [err, data] = await accountModel.login(username, password)
        if(err){
            return ErrRespond(res, 500, err)
        }else{
            return Respond(res, 200, data)
        }
    }
}

async function getAccounts(req, res){
    const [err, data] = await accountModel.getAccounts()
        if(err){
            return ErrRespond(res, 500, err)
        }else{
            return Respond(res, 200, data)
    }
}

async function insertAccount(req, res){
    const {username, password, email, displayname, role_id} = req.body
    if(!username || !password || !email){
        return ErrRespond(res, 400, 'Bad Request')
    }else{
        const storngPassword = validataPassword(password)
        if(!storngPassword){
            return ErrRespond(res, 400, 'Password is weaknesses')
        }
        const [err, data] = await accountModel.insertAccount(username, password, email, displayname, role_id)
        if(err){
            return ErrRespond(res, 500, err)
        }else{
            return Respond(res, 200, 'insert success')
        }
    }
}

function validataPassword(password){
    let matchedCase = new Array()
    matchedCase.push("[A-Z]")
    matchedCase.push("[a-z]")
    matchedCase.push("[0-9]")
    let point = 0
    for(let i = 0; i < matchedCase.length; i++){
        if(new RegExp(matchedCase[i]).test(password))
            point++
    }
    if(point!=matchedCase.length){
        return false
    }else{
        return true
    }
}