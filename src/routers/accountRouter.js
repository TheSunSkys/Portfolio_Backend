const express = require('express')
const route = express.Router()
const accountCTL = require('../controllers/accountCTL')

module.exports = route

route.get('/', (req, res) => {
    return res.json({ code: 200, msg: 'is user route' })
})


// route.post('/user/login', userCTL.login)
route.get('/accounts', accountCTL.getAccounts)
route.post('/insert', accountCTL.insertAccount)
route.post('/login', accountCTL.login)