const express = require('express')
const route = express.Router()
const accountCTL = require('../controllers/userCTL')

route.get('/', (req, res) => {
    return res.json({ code: 200, msg: 'server is running' })
})


route.post('/user/login', accountCTL.login)
module.exports = route