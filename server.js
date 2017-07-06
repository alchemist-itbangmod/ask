// ENV Config
require('dotenv').config()

// SERVER SETTING UP
const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

// NEXTJS SETTING UP
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// MONGODB AND MONGOOSE
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGO_URI, { useMongoClient: true })

// INITIAL SERVER
const server = express()
server.use(cookieParser())
server.use(bodyParser.urlencoded({ extended: true }))

const routes = require('./server/routes.js')

app.prepare()
.then(() => {
  const server = express()

  // API V.1
  server.use('/api/v1', routes)

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
