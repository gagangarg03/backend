require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/insta',(req,res)=>{
    res.send('enter your username and password')
})

app.get('/youtube',(req,res)=>{
    res.send('<h1>What do you like to watch</h1>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})