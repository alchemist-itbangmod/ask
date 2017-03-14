module.exports = function(io) {
  n=1
    io.on('connection', function (socket) {
      n++;
      console.log(n);
        socket.on('teacher', function(data) {
            console.log("Server Say : "+data);
            // io.emit('teacher', data);
        });
    });
};
