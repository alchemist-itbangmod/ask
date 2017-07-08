module.exports = function(io) {
  io.on('connection', function(socket) {
    console.log('socket connected')
    socket.on('hello-world', function(data) {
      console.log(`Hello World`)
    })
  })
}
