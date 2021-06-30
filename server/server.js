'use strict';

const socket = require('socket.io');
const io = socket(3000);
const cap = io.of('/cap');


// === === defining Queue === === //
const itemQueue = {
  pickup: {},
  transit: {},
  delivered: {},
};


cap.on('connection', (socket) => {
  console.log('Connection established with:', socket.id);


  // === === // pick up // === === //
  socket.on('pick-up', (payload) => {

    itemQueue.pickup[payload.payload.orderId] = payload;
    console.log('picked up', `time: ${new Date().toISOString()}`, payload);
    socket.broadcast.emit('pick-up', payload);

  });


  // === === // in-transit // === === //
  socket.on('in-transit', (payload) => {

    itemQueue.transit[payload.payload.orderId] = payload;
    delete itemQueue.pickup[payload.payload.orderId];
    console.log('in-transit', `time: ${new Date().toISOString()}`, payload);

  });


  // === === // delivered // === === //
  socket.on('getAll', () => {

    for (let temp in itemQueue.pickup) {
      // console.log('in-transit', `time: ${new Date().toISOString()}`, payload);
      // socket.broadcast.emit('delivered', payload);
      socket.emit('pick-up', itemQueue.pickup[temp]);
    }
  });

});