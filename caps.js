'use strict';

// === === // imports // === === //
const events = require('./events.js');
const vendor = require('./vendor/vendor.js');
const driver = require('./driver/driver.js');

const order = new vendor.Vendor();


// === === // events // === === //
events.on('picked up', driver.pickedUp);
events.on('in-transit', driver.inTransit);
events.on('delivered', vendor.thanks);


// === === // 5 second waiting period // === === //
setInterval(() => {
  events.emit('picked up', { payload: order.create() });
}, 5000);
