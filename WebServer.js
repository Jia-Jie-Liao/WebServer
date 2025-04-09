const http = require('http')
const fs = require('fs')
const dayjs = require('dayjs')

const utc = require('dayjs/plugin/utc')
const timezone = require('dayjs/plugin/timezone')

const isBetween = require("dayjs/plugin/isBetween")

console.log(dayjs().year())
console.log(dayjs().hour())
console.log(dayjs().minute())
console.log(dayjs().second())
// Time Zone
dayjs.extend(utc)
dayjs.extend(timezone)
const d1 = dayjs.tz('2025-05-21 12:00', 'America/New_York')
console.log(d1.toISOString())
// Is Before
const d2 = dayjs().isBefore(dayjs('2026-01-01'), 'month')
console.log(d2.toString())
// Is Between
dayjs.extend(isBetween)
const d3 = dayjs("2016-10-30").isBetween("2016-01-01", "2016-10-30", 'day', "[)")
console.log(d3.toString())

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