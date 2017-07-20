const io = require('socket.io').listen(3002)

module.exports = function(io) {
  io.on('connection', function(socket) {
    console.log('socket connected')

    socket.on('monitor', function(data) {
      //console.log('data-socket', data)
    })
  })
}
