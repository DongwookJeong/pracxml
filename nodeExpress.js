
const http = require('http')
const fs = require('fs')
const port = process.env.PORT || 3099
function serveStaticFile(res, path, contentType, responsecode = 200){
    fs,readFile(__dirname + path, (err, data) => {
        if(err){
            res,writeHead(500,{'content-Type': contentType})
            res,end(data)
        }
    })
}

const server = http.createServer((req, res)=>{
    const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()
    switch(path) {
        case '':
            res.writeHead(200, {'/public/home.html':'text/plain'})
            res.end('Homepage')
            break
        case '/about':
            res.writeHead(200, {'/public/about.html':'text/plain'})
            res.end('About')
            break
        case '/img/logo.png':
            res.writeHead(200, {'/public/img/logo.png':'image/png'})
            res.end('About')
            break
        default:
            res.writeHead(404, {'/public/404.html':'text/plain'})
            res.end('Not Found')
            break
    }
})

server.listen(port, ()=> console.log(`server started on port ${port};`+'press Ctrl-c to terminate....'))