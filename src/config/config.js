const { Client } = require('pg')

module.exports = {
  connection
}
function connection() {
  const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'pos',
    password: 'fang',
    port: 5432,
  })
  client.connect()
  return client
}