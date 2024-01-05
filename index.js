const expres = require('express')
const app = expres()
require('dotenv').config()
const port = process.env.port

app.get('/', (req, res) => {
    res.json({
        'hello':'world'
    })
})

app.listen(port, (err) => {
    if(err) throw err;
    console.log('The server is running on port ' + port)
})