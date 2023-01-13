const express = require('express')
const app = express()
const cors = require('cors')
const LinkPreviewGenerator = require('link-preview-generator')
let PORT = 8000

app.use(cors())
app.use('/assets', express.static('assets'));
app.use(express.static('public'))

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/api/:link', async (req,res) => {
    const preview = await LinkPreviewGenerator(req.params.link)
    res.json(preview)
})

app.listen(PORT, (req,res) => {
    console.log('server is running')
})