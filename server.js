const express = require('express')
const app = express()

app.get('/', (req,res) => {
    res.sendFile('/index.html')
})

app.listen(process.env.PORT || 8000, (req,res) => {
    console.log('server is running')
})