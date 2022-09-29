const express = require("express")
const app = express()
const mysql = require('mysql')
const path = require('path')
// const { brotliDecompressSync } = require("zlib")

const aaa = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'kdt305',
    database : 'login'
})

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "login.html"))

})
app.post('/', function(req, res){
    let sql = 'select * from login;'
    let body = req.body

    aaa.query(sql, function(err,results){
        if(err){
            console.log(err)
        }
        res.send(results)
    })
   
})

app.listen(4444, ()=>{
    console.log("다 비켜")
})
console.log(results)