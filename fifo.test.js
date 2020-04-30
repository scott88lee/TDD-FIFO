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

const answerSet = [
  {action: 'buy', qty: 5, price: 10, totalQty: 5, invValue: 50, cogs: 0},
  {action: 'sell', qty: 5, price: 10, totalQty: 0, invValue: 0, cogs: 50},
  {action: 'buy', qty: 10, price: 10, totalQty: 10, invValue: 100, cogs: 0},
  {action: 'buy', qty: 10, price: 11, totalQty: 20, invValue: 210, cogs: 0},
  {action: 'sell', qty: 15, price: 20, totalQty: 5, invValue: 55, cogs: 155},
  {action: 'buy', qty: 10, price: 12, totalQty: 15, invValue: 175, cogs: 0},
  {action: 'sell', qty: 6, price: 20, totalQty: 9, invValue: 108, cogs: 67},
  {action: 'buy', qty: 10, price: 10, totalQty: 19, invValue: 208, cogs: 0},
  {action: 'sell', qty: 10, price: 20, totalQty: 9, invValue: 102, cogs: 106}
];

describe('Objective 2', () => {
  test('DataSet 5', () => {
    expect(fifo.totalQty(dataSet.slice(0, 5)))
      .toBe(5);
  });
});


//Objective 1 done.
describe('Checking total quantity', () => {
  test('First', ()=> {
    expect(fifo.totalQty(dataSet, 0)).toBe(5)
  })
  test('Buy then sell', ()=> {
    expect(fifo.totalQty(dataSet, 1)).toBe(0)
  })
  test('Dataset at index 5', ()=> {
    expect(fifo.totalQty(dataSet, 5)).toBe(15)
  })
  test('Full dataset', ()=> {
    expect(fifo.totalQty(dataSet, 8)).toBe(9)
  })
  test('Every index', ()=> {
    for (let i=0; i<dataSet.length; i++){
      expect(fifo.totalQty(dataSet, i)).toBe(answerSet[i].totalQty)
    }
  })
});


// describe('Returns current inventory', () => {

//   test('DataSet 1', () => {
//     expect(fifo.invValue(dataSet.slice(0, 1)))
//       .toBe(50);
//   });
// });
