const express = require('express')  // import express library
const path = require('path')

const indexRouter = require('./routes/index.js')  // import index.js as indexRouter

const app = express() // make new web application server

const staticFilePath = path.join(__dirname, 'client', 'dist') // new variable to set path to client/dist directory
const staticFiles = express.static(staticFilePath)  // new variable to set express files as static files
app.use('/', staticFiles)  // serving static files (vue client files) to homepage of server


app.use('/', indexRouter)  // send everything through indexRouter to be handled

const server = app.listen(process.env.PORT || 3000, function() {    // start server on port 3000
    console.log('Server running on port ', server.address().port)  // print output
})

