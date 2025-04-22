const express = require('express')
const dayjs = require('dayjs')

const app = express()

app.set('view engine','ejs')
app.set('views','page')     //express在page裡找回相應的ejs檔案

app.get('/', (req,res) => {
    // res.send('<h1>Home<h1>')
    let now = `現在是${dayjs().hour()}時${dayjs().minute()}分${dayjs().second()}秒`
    res.render('index',{courseName : 'NodeJS入門', time : now})
})

app.get('/about', (req,res) => {
    res.render('about',{courseName : 'NodeJS入門'})
})

app.get('/aboutme', (req,res) => {
    res.redirect('about')
})

app.use((req,res) => {
    res.status(404).render('404')
    // res.status(404)
})

app.listen(3000)