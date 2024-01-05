const expres = require('express')
const app = expres()
require('dotenv').config()

app.get('/', (req, res) => {
    res.json({
        text: process.env.text
    })
})

const port = 3000;
app.listen(port, (err) => {
    if(err) throw err;
    console.log('The server is running on port ' + port)
})