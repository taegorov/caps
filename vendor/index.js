'use strict';

// === === // imports // === === //
require('dotenv').config()
const io = require('socket.io-client');
const url = 'http://localhost:3000/cap';
const server = io.connect(url);

const storeName = process.env.STORENAME;
const otherStoreName = process.env.OTHERSTORENAME;

const faker = require('faker');



// === === constructor === === //
class Vendor {
  constructor() {
    this.array = [];
  };

  create() {
    let newOrder = {
      // storeName: faker.commerce.productName(),
      storeName: storeName,
      orderId: faker.datatype.uuid(),
      customerName: faker.name.findName(),
      address: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.state()}`,
    };
    this.array.push(newOrder);
    return newOrder;
  }

  createAgain() {
    console.log(this.array);
    let newOrder = {
      storeName: otherStoreName,
      orderId: faker.datatype.uuid(),
      customerName: faker.name.findName(),
      address: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.state()}`,
    };
    this.array.push(newOrder);
    return newOrder;
  }
}


const order = new Vendor();


server.on('delivered', (payload) => {
  console.log(`👨‍💻 VENDOR: thank you for delivering ${payload.payload.orderId}`);
});


// === === // create() pickup, wait 5 seconds // === === //
setInterval(() => {
  server.emit('pick-up', { payload: order.create() });
}, 5000);

// === === // createAgain() pickup, wait 6 seconds // === === //
setInterval(() => {
  server.emit('pick-up', { payload: order.createAgain() });
}, 6000);

// === === // export // === === //
// module.exports = Vendor;