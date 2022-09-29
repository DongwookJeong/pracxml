const express = require("express")
const app = express()
const mysql = require("mysql")
const path = require("path")

const rose = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'kdt305',
    database : 'login'
})
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, "praclogin.html"))
})

app.post('/', (req, res)=>{
    let body = req.body
    let id = body.id
    let name = body.name
    let pw = body.pw
    let sql = "insert into login(id, name, pw) value('1', 'oh', 'bye')"
    rose.query(sql, function(err){
        if(err){
            console.log(err)
        }
        res.send("응 아니야")
    })
})
app.listen(5010, ()=>{
    console.log(`http://localhost:5010`)
})