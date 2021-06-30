'use strict';

// === === // imports // === === //
const io = require('socket.io-client');
const url = 'http://localhost:3000/cap'
const server = io.connect(url);


server.emit('getAll');


server.on('pick-up', (payload) => {

  // === pickup, wait 1 second === //
  setTimeout(() => {

    // console.log(`🎉 EVENT: pickup`);
    // console.log(`TIME: ${new Date().toISOString()}`);

    console.log(`🚚 DRIVER: picked up ${payload.payload.orderId}`);
    server.emit('in-transit', payload);

  }, 1000);


  // === en route, wait 3 seconds === //
  setTimeout(() => {

    // console.log(`🎉 EVENT: in-transit`);
    console.log(`🚚 DRIVER: delivered ${payload.payload.orderId}`);
    server.emit('delivered', payload);
  }, 3000);

});
