const express = require('express')
const helmet = require('helmet')
const cors = require('./cors')
const apiRoutes = require('./src/routes')
const bodyParser = require('body-parser')
const port = parseInt(process.env.PORT, 10) || 3000

const app = express()
app.use(helmet())
app.use(cors)
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('#ask api is running !')
})
// getRoomId
app.get('/rooms/:id', async (req, res) => {
  res.send(req.params.id)
})

app.get('/questions/:id', async (req, res) => {
  res.send(req.param)
})

app.use('/api/v1', apiRoutes)

app.listen(3000, () => {
  console.log('> Ready on http://localhost:', port) // eslint-disable-line
})
