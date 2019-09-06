//console.log('Hello World');

const express = require('express')
const path = require('path')

//Init App
const app = express()
const port = 3000

//Load view engine
app.use('/css', express.static(__dirname+'/css'));
app.use('/vendor', express.static(__dirname+'/vendor'));
app.use('/img', express.static(__dirname+'/img'));
//Home Route
app.get('/', (req, res) =>res.sendFile('index.html', {root: path.join(__dirname, '.')}))


//Start Server
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
