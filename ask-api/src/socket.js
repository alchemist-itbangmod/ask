export default (io) => {
  io.on('connection', (socket) => {
    console.log('socket connected')

    socket.on('room', (room) => {
      socket.join(room)
    })
  })
}
