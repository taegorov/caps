'use strict';

const vendor = require('../vendor/index.js');
const driver = require('../driver/index.js');
const events = require('../events.js');
const faker = require('faker');

console.log = jest.fn();
events.emit = jest.fn();


// === === // tests start here // === === //
describe('testing all those tests', () => {
  let payload = {
    payload: {
      storeName: faker.commerce.productName(),
      orderId: faker.datatype.uuid(),
      customerName: faker.name.findName(),
      address: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.state()}`,
    },
  };


  test('VENDOR should console.log some output', () => {
    vendor.thanks(payload);

    expect(events.emit).not.toHaveBeenCalled();
    expect(console.log).toHaveBeenCalled();
    console.log('VENDOR.THANKS = ', vendor.thanks(payload));
  });


  test('DRIVER picked up should console.log some output', () => {
    driver.pickedUp(payload);

    expect(console.log).toHaveBeenCalled();
  });


  test('DELIVERED should console.log some output', () => {
    driver.inTransit(payload);

    expect(console.log).toHaveBeenCalled();
  });
});