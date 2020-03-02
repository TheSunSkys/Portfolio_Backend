const {connection} = require('../config/config')

module.exports = {
    query
}

async function query(sql, value){
    const client = connection()
    let data = ''
    let err = ''
    try {
        const {rows} = await client.query(sql, checkArray(value) ? value : '')
        data = rows
    } catch (error) {
        err = error.message
    }
    client.end()
    return [err, data]
}

function checkArray(arr){
    if(Array.isArray(arr) && arr.length && arr[0] != '')
        return true
    return false
}