const express = require("express")
const app = express()
const mysql = require("mysql")
const path = require("path")
const port = 5000;
// express, mysql, path

const apple = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'kdt305',
    database : 'login'
})
// mysql, 연동  ^^^^^고정

app.use(express.json())
app.use(express.urlencoded({extended:true}))
// body paser 선언
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname + "/login.html"))
    })

app.post('/', (req, res)=>{
  const sql = "insert into login set ?"
  apple.query(sql, req.body, (err, row, field) => {
    if(err) throw err;
    console.log(row)
    res.send("완료")
    // 회원가입 페이지 연결해야됨
  })
})
// 정정원 제작 ^

// app.get('/', (req, res)=>{
    //     res.sendFile(path.join(__dirname,"login.html"))
    // })
    // html 파일 화면 표출
    
    // app.post('/', (req, res)=>{
        //     let body = req.body
        //     let id = body.id
        //     let name = body.name
        //     let pw = body.pw
        //     let sql = "insert into login(id, name, pw) values('1', 'bye', 'good')"
        //     apple.query(sql, function(err){
            //         if(err){
                //             console.log(err)
                //         }
                //         res.send("gg")
                //     })
                // })
                // 류주완 제작 ^
                app.get('/board', (req, res)=>{
                    res.sendFile(__dirname + "/doit.html")
                })
                app.post('/board', (req, res)=>{
                    let body = req.body
                    let id = body.id
                    let title = body.title
                    let detail = body.detail
                    let sql = "insert into login(id, title, detail) values('1', '안녕', '안녕')"
                    apple.query(sql, function(err){
                        if(err){
                            console.log(err)
                        }
                        res.send("what")
                    })
                })
                app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`)
})