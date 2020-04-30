const fifo = require('./fifo');

const dataSet = [
  { date: '1/4/2020', action: 'buy', qty: 5, price: 10 },
  { date: '2/4/2020', action: 'sell', qty: 5, price: 10 },
  { date: '3/4/2020', action: 'buy', qty: 10, price: 10 },
  { date: '4/4/2020', action: 'buy', qty: 10, price: 11 },
  { date: '5/4/2020', action: 'sell', qty: 15, price: 20 },
  { date: '6/4/2020', action: 'buy', qty: 10, price: 12 },
  { date: '7/4/2020', action: 'sell', qty: 6, price: 20 },
  { date: '8/4/2020', action: 'buy', qty: 10, price: 10 },
  { date: '9/4/2020', action: 'sell', qty: 10, price: 20 },
];

const ansSet = [
  { date: '1/4/2020', totalQty: 5, invValue: 50, cogs: 0},
  { date: '2/4/2020', totalQty: 0, invValue: 0, cogs: 50},
  { date: '3/4/2020', totalQty: 10, invValue: 100, cogs: 0},
  { date: '4/4/2020', totalQty: 20, invValue: 210, cogs: 0},
  { date: '5/4/2020', totalQty: 5, invValue: 55, cogs: 155},
  { date: '6/4/2020', totalQty: 15, invValue: 175, cogs: 0},
  { date: '7/4/2020', totalQty: 9, invValue: 108, cogs: 67},
  { date: '8/4/2020', totalQty: 19, invValue: 208, cogs: 0},
  { date: '9/4/2020', totalQty: 9, invValue: 102, cogs: 106},
]

describe('Returns value', () => {
  test('Returns 50', ()=> {
    expect(fifo.dumb(123123123)).toBe(50)
  })
});

// describe('Returns current quantity', () => {
//   test('DataSet 5', () => {
//     expect(fifo.totalQty(dataSet.slice(0, 5)))
//       .toBe(5);
//   });
// });

// describe('Returns current inventory', () => {

//   test('DataSet 1', () => {
//     expect(fifo.invValue(dataSet.slice(0, 1)))
//       .toBe(50);
//   });
// });
