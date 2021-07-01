'use strict';

const socket = require('socket.io');
const io = socket(3000);
const cap = io.of('/cap');


// === === defining Queue server hub === === //
const messageQueue = {
  pickup: {},
  transit: {},
  delivered: {},
};


cap.on('connection', (socket) => {
  console.log('Connection established with:', socket.id);


  // === === // pick up // === === //
  socket.on('pick-up', (payload) => {

    messageQueue.pickup[payload.payload.orderId] = payload;
    // console.log('picked up', `time: ${new Date().toISOString()}`, payload);
    console.log('🔥EVENT: ', payload);
    socket.broadcast.emit('pick-up', payload);

  });


  // === === // in-transit // === === //
  socket.on('in-transit', (payload) => {

    messageQueue.transit[payload.payload.orderId] = payload;
    delete messageQueue.pickup[payload.payload.orderId];
    // console.log('in-transit', `time: ${new Date().toISOString()}`, payload);
    console.log('🌌EVENT: ', payload);

  });


  // === === // delivered // === === //
  socket.on('delivered', (payload) => {
    console.log('✅EVENT: delivered', payload);

    for (let temp in messageQueue.pickup) {
      // console.log('in-transit', `time: ${new Date().toISOString()}`, payload);
      // socket.broadcast.emit('delivered', payload);
      socket.emit('pick-up', messageQueue.pickup[temp]);
    }
  });

});