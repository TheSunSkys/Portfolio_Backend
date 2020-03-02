const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.DB_PORT || 3300
const app = express()
const morgan = require('morgan') //แสดงผลเกี่ยวกับการกระทำต่อ server เช่น การดึงข้อมูล
const server = require('http').createServer(app); // นำมาใช้ในการทำ jwt
const io = require('socket.io') //การแสดงผลแบบ real-time

const accountRoute = require('./routers/accountRouter')
const roleRoute = require('./routers/roleRouter')
app.use(cors())
//อ่านค่าจาก body โดยใช้ bodyParser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
//cors
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    )
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    next()
})

app.use(morgan('--> :method  :date[iso] Started :url FROM :remote-addr'))
app.use(morgan('<-- :date[iso] Completed :status in :response-time ms'))

app.get('/', (req, res) => res.send('Hello World'))
app.use('/user', accountRoute)

app.use('/role', roleRoute)
app.listen(port, () => {
    console.log('server run on : http://127.0.0.1:' + port);
});