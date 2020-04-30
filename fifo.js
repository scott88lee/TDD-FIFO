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

function conDate()

function totalQty() {
  console.log(dataSet[0].date)
  return 50 ;
}

function invValue() {
  return this.totalQty();
}

function dumb() {
  return 50;
}

module.exports = { totalQty, invValue, dumb }