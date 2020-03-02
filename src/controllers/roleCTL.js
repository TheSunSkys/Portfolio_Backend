const { Respond, ErrRespond } = require('../respondHandle/index')
const roleModel = require('../models/roleModel')
module.exports = {
    insertRole,
    roles
}

async function insertRole(req, res){
    const { roleName, permission } = req.body
    const [ err, data ] = await roleModel.insertRole(roleName, permission)
    if(err){
        return ErrRespond(res, 500, err)
    }else{
        return Respond(res, 200, data)
    }
}

async function roles(req, res){
    const [err, data] = await roleModel.roles()
    if(err){
        return ErrRespond(res, 500, err)
    }else{
        return Respond(res, 200, data)
    }
}