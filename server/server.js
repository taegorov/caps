'use strict';

const socket = require('socket.io');

// we have a hub for creating events on.
const io = socket(3000);
const cap = io.of('/cap');


// the following code fragment is borrowed from my instructor, Jacob Knaack of Code Fellows
io.on('connection', (socket) => {
  console.log('Welcome, your socket id is:', socket.id);
});

cap.on('connection', (socket) => {
  console.log('Connection established with:', socket.id);

  // === === // pick up // === === //
  socket.on('pick-up', (payload) => {
    console.log('picked up', `time: ${new Date().toISOString()}`, payload);
    socket.broadcast.emit('pick-up', payload);
  });

  // === === // in-transit // === === //
  socket.on('in-transit', (payload) => {
    console.log('in-transit', `time: ${new Date().toISOString()}`, payload);
  });

  // === === // delivered // === === //
  socket.on('delivered', (payload) => {
    console.log('in-transit', `time: ${new Date().toISOString()}`, payload);
    socket.broadcast.emit('delivered', payload);
  });

});