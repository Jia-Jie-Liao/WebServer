const express = require('express')

const app = express()

app.get('/', (req,res) => {
    // res.send('<h1>Home<h1>')
    res.sendFile('./page/index.html', {root:__dirname})
})

app.get('/about', (req,res) => {
    res.sendFile('./page/about.html', {root:__dirname})
})

app.get('/aboutme', (req,res) => {
    res.redirect('/about')
})

app.use((req,res) => {
    res.status(404).sendFile('./page/404.html', {root:__dirname})
    // res.status(404)
})

app.listen(3000)