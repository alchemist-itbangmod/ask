import io from 'socket.io-client'
const socket = io.connect('http://192.168.1.22:3002')

export default socket
