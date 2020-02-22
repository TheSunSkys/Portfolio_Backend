const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.DB_PORT || 3300
const app = express()
const Route = require('./routers/userRouter')
app.use(cors())
//อ่านค่าจาก body โดยใช้ bodyParser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use('/user', Route)
app.get('/', (req, res) => res.send('Hello World'))

app.listen(port, () => {
    console.log('server run on : http://127.0.0.1:' + port);
});