const express = require('express')
const helmet = require('helmet')
const cor = require('./cor')
const bodyParser = require('body-parser')
const apiRoutes = require('./src/routes')

const port = parseInt(process.env.PORT, 10) || 3000

const app = express()
app.use(helmet())
app.use(bodyParser.json())
app.use(cor)

app.get('/', (req, res) => {
  res.send('#ask api is running !')
})

app.use('/api/v1', apiRoutes)

app.listen(port, () => {
  console.log('> Ready on http://localhost:', port) // eslint-disable-line
})
