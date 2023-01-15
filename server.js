const express = require('express')
const app = express()
const cors = require('cors')
const LinkPreviewGenerator = require('link-preview-generator')
require('dotenv').config()

app.use(cors())
app.use(express.static('public'))

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://link-preview-gen-api.up.railway.app");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req,res) => {
    res.sendFile('/index.html')
})

app.get('/api/link', async (req,res) => {
    try{
        const preview = await LinkPreviewGenerator('https://boonaki.me')

        const response = {
            statusCode: 200,
            headers: {
              'Access-Control-Allow-Origin': '*', // <-- Add your specific origin here
              'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify({
              preview: preview
            }),
        };
        res.json(response)
    }catch(err){
        console.log(err)
    }
})

app.listen(process.env.PORT || 8000, (req,res) => {
    console.log('server is running')
})