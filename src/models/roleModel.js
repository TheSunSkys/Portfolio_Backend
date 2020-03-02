const { connection } = require('../config/config')
const { query } = require('../lib/query')

module.exports = {
    insertRole,
    roles
}

async function insertRole(roleName, permission){
    const sqlStatement = `
        INSERT INTO roles(role_name, permission)
        VALUES ($1, $2)
        RETURNING role_id, role_name
    `
    const value = [roleName, permission]
    return await query(sqlStatement, value)
}

async function roles(){
    const sqlStatement = `
        SELECT role_name, permission, isactive
        FROM roles
    `
    return await query(sqlStatement)
}