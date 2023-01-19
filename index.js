const express = require('express')
const app = express()

const LinkPreviewGenerator = require('link-preview-generator')


app.use(cors())
app.use(express.static('public'))


// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "https://link-preview-gen-api.up.railway.app");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/api/link', async (req,res) => {
    const preview = await LinkPreviewGenerator('https://boonaki')
    console.log(preview)
    res.json(preview)
})

app.listen(process.env.PORT || 8000, (req,res) => {
    console.log('server is running')
})

module.exports = app;