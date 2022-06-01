const PORT = 8080;
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = app.listen(PORT);
const io = socketio(server);

app.use(express.static('static'));

io.on('connection', (socket) => {
  console.log(`${socket.id} has connected`);
  
  socket.on('disconnect', () => {
    console.log(`${socket.id} has disconnected`)
  });
});
