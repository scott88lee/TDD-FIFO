const fifo = require('./fifo');

const dataSet = [
  {action: 'buy', qty: 5, price: 10 },
  {action: 'sell', qty: 5, price: 10 },
  {action: 'buy', qty: 10, price: 10 },
  {action: 'buy', qty: 10, price: 11 },
  {action: 'sell', qty: 15, price: 20 },
  {action: 'buy', qty: 10, price: 12 },
  {action: 'sell', qty: 6, price: 20 },
  {action: 'buy', qty: 10, price: 10 },
  {action: 'sell', qty: 10, price: 20 },
];


describe('Returns current quantity', () => {
  test('DataSet 1', () => {
    expect( fifo.totalQty( dataSet.slice(0,1) ))
    .toBe(5);
  });
  test('DataSet 2', () => {
    expect( fifo.totalQty( dataSet.slice(0,2) ))
    .toBe(0);
  });
  test('DataSet 3', () => {
    expect( fifo.totalQty( dataSet.slice(0,3) ))
    .toBe(10);
  });
  test('DataSet 4', () => {
    expect( fifo.totalQty( dataSet.slice(0,4) ))
    .toBe(20);
  });
  test('DataSet 5', () => {
    expect( fifo.totalQty( dataSet.slice(0,5) ))
    .toBe(5);
  });
});

describe('Returns current inventory', () => {

  test('DataSet 1', () => {
    expect( fifo.invValue( dataSet.slice(0,1) ))
    .toBe(50);
  });
  
  // test('DataSet 2', () => {
  //   expect( fifo.inv( dataSet.slice(0,2) ))
  //   .toBe(0);
  // });

  // test('DataSet 3', () => {
  //   expect( fifo.inv( dataSet.slice(0,3) ))
  //   .toBe(100);
  // });

  // test('DataSet 4', () => {
  //   expect( fifo.inv( dataSet.slice(0,4) ))
  //   .toBe(210);
  // });

  // test('DataSet 5', () => {
  //   expect( fifo.inv( dataSet.slice(0,5) ))
  //   .toBe(55);
  // });

  // test('DataSet 6', () => {
  //   expect( fifo.inv( dataSet.slice(0,6) ))
  //   .toBe(175);
  // });

  // test('DataSet 7', () => {
  //   expect( fifo.inv( dataSet.slice(0,7) ))
  //   .toBe(108);
  // });

  // test('DataSet 8', () => {
  //   expect( fifo.inv( dataSet.slice(0,8) ))
  //   .toBe(208);
  // });
  
  // test('DataSet 9', () => {
  //   expect( fifo.inv( dataSet.slice(0,9) ))
  //   .toBe(102);
  // });

});
