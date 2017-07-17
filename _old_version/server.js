// --------------------
//  ASK : API SERVICES
// --------------------

// --------------------
//    ENV FILE CONFIG
// --------------------
require('dotenv').config()

// -----------------------
//   IMPORT DEPENDENCIES
// -----------------------
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')

// ----------------------
//   MONGODB & MONGOOSE
// ----------------------
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGO_URI, { useMongoClient: true })

// ----------------------
//     INITIAL SERVER
// ----------------------
const server = express()
server.use(cors())
server.use(cookieParser())
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

// INITIAL SOCKET.IO
const io = require('socket.io').listen(3002)
require('./server/services')(io)
// ----------------------
//     PASSPORT AUTH!
// ----------------------
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)

server.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 86400000 },
  store: new MongoStore({
    url: process.env.MONGO_URI,
    autoReconnect: true
  })
}))
server.use(passport.initialize())
server.use(passport.session())

// API V.1
const routes = require('./server/routes.js')(io)
server.use('/api/v1', routes)

// LISTEN PORT 3001
server.listen(3001, (err) => {
  if (err) throw err
  console.log('> Ready on http://localhost:3001')
})

module.exports = server
