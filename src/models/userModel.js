const connect = require('../config/config')

module.exports = {
    login
}

async function login(username, password){
    const sqlStatement = `
        SELECT username
        FROM accounts
        WHERE username = $1 and isactive = 'true' 
    `
    let err, data
    const values = [ username ]
    try{

    }catch(error){
        err = error
    }
    return [err, data]
}

//ยังไม่สมบูรณ์