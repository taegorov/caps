'use strict';

// === === // imports // === === //
const faker = require('faker'); // faker library makes up phony information


// === === constructor === === //
class Vendor {
  constructor() {
    this.array = [];
  };

  create() {
    let newOrder = {
      storeName: faker.commerce.productName(),
      orderId: faker.datatype.uuid(),
      customerName: faker.name.findName(),
      address: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.state()}`,
    };
    this.array.push(newOrder);
    return newOrder;
  }
}


function thanks(payload) {
  console.log(`👨‍💻 VENDOR: thank you for delivering ${payload.payload.orderId}`);
  console.log(`⌚TIME: ${new Date().toISOString()}`);
  console.log(payload);
}

module.exports = { Vendor, thanks };
