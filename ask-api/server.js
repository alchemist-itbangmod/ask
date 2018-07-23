import express from 'express'
import helmet from 'helmet'
import cors from './cors'
import apiRoutes from 'api/routes'
import bodyParser from 'body-parser'
const port = parseInt(process.env.PORT, 10) || 3000

const app = express()
app.use(helmet())
app.use(cors)
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('#ask api is running !')
})

app.use('/api/v1', apiRoutes)

app.listen(port, () => {
  console.log('> Ready on http://localhost:', port) // eslint-disable-line
})