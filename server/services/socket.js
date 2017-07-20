
module.exports = function(io) {
  io.on('connection', function(socket) {
    console.log('socket connected')

    socket.on('room', function(room) {
      socket.join(room)
    })
  })
}
