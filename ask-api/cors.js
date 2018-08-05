const cors = (_, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8000')
  res.header('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,PUT')
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, Content-Length, X-Requested-With'
  )
  res.set('Access-Control-Expose-Headers', 'x-token')
  next()
}

export default cors