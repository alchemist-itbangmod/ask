module.exports = function(io) {
  io.on('connection', function(socket) {
    console.log('socket connected')
    socket.on('monitor', function(data) {
      console.log(data)
    })
  })
}
