/**
 * Application entry point
 */
const express = require('express')
const app = new express()
const config = require('./config')
const connect = require('./db')
const routes = require('./routes/index.routes')
const cors = require('cors')

// Register middleware
app.use(express.json())
// TODO: configure cors origin ips for prod
// https://expressjs.com/en/resources/middleware/cors.html
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use((req, res, next) => {
	console.log(`${req.method} ${req.originalUrl} ${JSON.stringify(req.body)}`)
	next()
})

// Connecto to mongo
connect()

//Register all routes
app.use('/api', routes)

app.listen(config.port, () => {
	console.log(`Connected to port: ${config.port}`)
})

