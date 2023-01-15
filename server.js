const express = require('express')
const app = express()
const cors = require('cors')
const LinkPreviewGenerator = require('link-preview-generator')
require('dotenv').config()

app.use(cors())
app.use(express.static('public'))

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req,res) => {
    res.sendFile('/index.html')
})

app.get('/api/:link', async (req,res) => {
    const preview = await LinkPreviewGenerator(req.params.link)
    res.json(preview)
})

app.listen(process.env.PORT || 8000, (req,res) => {
    console.log('server is running')
})