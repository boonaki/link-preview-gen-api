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

    const response = {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': 'link-preview-gen-api.up.railway.app',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify({
          preview: preview
        }),
    };
    res.json(response)
})

app.listen(process.env.PORT || 8000, (req,res) => {
    console.log('server is running')
})