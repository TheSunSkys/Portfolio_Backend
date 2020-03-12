const {connection} = require('../config/config')
const {query} = require('../lib/query')
const bcrypt = require('bcrypt')
module.exports = {
    login,
    getAccounts,
    insertAccount,
}

async function login(username, password){
    let data = ''
    const sqlStatement = `
        SELECT username, password
        FROM accounts
        WHERE username = $1
        AND isactive = true
    `
    const value = [username]
    const [err, rows] = await query(sqlStatement, value)
    if(!rows){
        err = 'fail login'
    }else{
        const checkPassword = await bcrypt.compare(password, rows[0].password)
        if(!checkPassword){
            err = 'username or password incorrect'
        }else{
            data = {
                username: rows[0].username
            }
        }
    }
    return [err, data]
}

async function getAccounts(){
    const sqlStatement = `
        SELECT * FROM accounts
    `
    return await query(sqlStatement)
}

async function insertAccount(username, password, email, displayname, role_id){
    let haveRole = false
    let [err, data] = await checRoleName(role_id)
    if(!data){
        err = 'Please select role.'
    }else{
        haveRole = true
    }
    if(haveRole){
        const sqlStatement = `
            INSERT INTO accounts(username, password, email, displayname, role_id)
            VALUES($1, $2, $3, $4, $5)
        `
        const passwordHas = await bcrypt.hashSync(password, 6)
        const value = [username, passwordHas, email, displayname, role_id]
        return await query(sqlStatement, value)
    }
    return [err, data]
}

async function checRoleName(id){
    const sqlCheckRoleID = `
    SELECT role_id 
    FROM roles
    WHERE role_id = $1
    `   
    const valueCheckRole = [id]
    return await query(sqlCheckRoleID, valueCheckRole)
}