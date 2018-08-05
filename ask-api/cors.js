const cors = (req, res, next) => {
  var allowedOrigins = ['http://localhost:8000', 'http://localhost:5000', 'https://ask.kmutt.ac.th']
  var origin = req.headers.origin
  if (allowedOrigins.indexOf(origin) > -1) {
    res.setHeader('Access-Control-Allow-Origin', origin)
  }
  res.header('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,PUT')
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, Content-Length, X-Requested-With'
  )
  res.set('Access-Control-Expose-Headers', 'x-token')
  next()
}

export default cors