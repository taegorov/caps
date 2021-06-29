'use strict';

// === === // imports // === === //
const events = require('./events.js');
const vendor = require('./vendor/index.js');
const driver = require('./driver/index.js');


const order = new vendor();


// === === // events // === === //
events.on('picked up', driver.pickedUp);
events.on('in-transit', driver.inTransit);
// events.on('delivered', vendor.thanks);


// === === // 5 second waiting period // === === //
setInterval(() => {
  events.emit('picked up', { payload: order });
}, 5000);
