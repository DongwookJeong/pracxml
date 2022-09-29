const express = require("express")
const app = express()
const mysql = require("mysql")
const path = require("path")

const black = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'kdt305',
    database : 'login'
})

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname,"3login.html"))
})
app.post('/', (req, res) => {
    let body = req.body
    let id = body.id
    let name = body.name
    let pw = body.pw
    let sql = "lnsert into login(id, name, pw) values('1', 'bye', 'bad')"
    black.query(sql, function(err){
        if(err){
            console.log(err)
        }
        res.send("다시")
    })
})
app.listen(5000, ()=>{
    console.log(`http://localhost:5000`)
})