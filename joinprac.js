const express = require("express")
const app = express()
const mysql = require("mysql")
const path = require("path")

const hi = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'kdt305',
    database : 'login'
})

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, "login.html"))
})

app.post('/', (req, res)=>{
    let body = req.body
    let id = body.id
    let name = body.name
    let pw = body.pw
    let sql = "insert into login(id, name, pw) value('1', 'oh', 'bye')"
    hi.query(sql, function(err){
        if(err){
            console.log(err)
        }
        res.send("물음표")
    })
})
app.listen(5000, ()=>{
    console.log(`http://localhost:5000`)
})