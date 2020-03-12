const express = require('express')
const route = express.Router()
const roleCTL = require('../controllers/roleCTL')

module.exports = route

route.get('/', (req, res) => {
    return res.json({ code: 200, msg: 'is role route'})
})

route.post('/insert', roleCTL.insertRole)
route.get('/roles', roleCTL.roles)