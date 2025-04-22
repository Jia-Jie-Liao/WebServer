const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res) => {
    // console.log('訪客請求已收到');

    // console.log(req.url)
    // console.log(req.method)

    let path = './page/'
    switch (req.url) {
        case '/':
            path += 'index.html'
            res.statusCode = 200
            break;
        case '/about':
            path += 'about.html'
            res.statusCode = 200
            break;
        case '/aboutme':
            res.statusCode = 301
            res.setHeader('Location','/about')
            res.end()
            return
            break;
        default:
            path += '404.html'
            res.statusCode = 404
            break;
    }

    res.setHeader('Content-Type','text/html')

    fs.readFile(path, (error, data) => {
        if (error)
            console.log(error)
        else
            res.write(data)
        res.end()
    })

    
    // res.write('<meta charset="UTF-8">')
    // res.write('<h1>hello<h1>')
    // res.write('<h2>NodeJS入門<h2>')
    // res.end()
})

server.listen(3000,'localhost',() => {
    console.log('伺服器已在接收第3000號port');
    
})