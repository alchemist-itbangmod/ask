const express = require('express')
const helmet = require('helmet')
const cor = require('./cor')
const apiRoutes = require('./src/routes')

const port = parseInt(process.env.PORT, 10) || 3000

const app = express()
app.use(helmet())
app.use(cor)

app.get('/', (req, res) => {
  res.send('#ask api is running !')
})

app.get('/rooms/pin/:pin', async (req, res) => {
  res.send(req.params.pin)
})

app.use('/api/v1', apiRoutes)

app.listen(3000, () => {
  console.log('> Ready on http://localhost:', port) // eslint-disable-line
})