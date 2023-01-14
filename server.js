const express = require('express')
const app = express()
const cors = require('cors')
const LinkPreviewGenerator = require('link-preview-generator')
require('dotenv').config()

app.use(cors())
app.use(express.static('public'))

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/api/:link', async (req,res) => {
    const preview = await LinkPreviewGenerator(req.params.link)
    res.send(preview)
})

app.listen(process.env.PORT || 8000, (req,res) => {
    console.log('server is running')
})