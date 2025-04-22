const express = require('express')
const dayjs = require('dayjs')

const app = express()

app.set('view engine','ejs')
app.set('views','page')     //express在page裡找回相應的ejs檔案

app.get('/', (req,res) => {
    // res.send('<h1>Home<h1>')
    let articles = [
        { title: '如何使用NodeJS', author: '家頡' },
        { title: 'NodeJS和PHP差別', author: 'david' },
        { title: 'NPM和NodeJS關係', author: 'ann' }
    ]
    let now = `現在是${dayjs().hour()}時${dayjs().minute()}分${dayjs().second()}秒`
    res.render('index', {
        title: '首頁',
        time: now,
        blogs: articles
    })
})

app.get('/about', (req, res) => {
    res.render('about', { title: '關於' })
})

app.get('/aboutme', (req,res) => {
    res.redirect('about')
})

app.use((req, res) => {
    res.status(404).render('404', { title: '找不到' })
    // res.status(404)
})

app.listen(3000)