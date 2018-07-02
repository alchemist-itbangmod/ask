const express = require('express')
const helmet = require('helmet')
const cor = require('./cor')

const port = parseInt(process.env.PORT, 10) || 3000

const app = express()
app.use(helmet())
app.use(cor)

app.get('/', (req, res) => {
  res.send('#ask api is running !')
})

app.listen(port, () => {
  console.log('> Ready on http://localhost:', port) // eslint-disable-line
})
