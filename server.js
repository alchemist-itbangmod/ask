// ENV Config
require('dotenv').config()

// SERVER SETTING UP
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

// MONGODB AND MONGOOSE
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGO_URI, { useMongoClient: true })

// INITIAL SERVER
const server = express()
server.use(cookieParser())
server.use(bodyParser.urlencoded({ extended: true }))

// API V.1
const routes = require('./server/routes.js')
server.use('/api/v1', routes)

// LISTEN PORT 3001
server.listen(3001, (err) => {
  if (err) throw err
  console.log('> Ready on http://localhost:3001')
})
