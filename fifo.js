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

function totalQty(arr, date) {
  let total = 0;

  for (let i=0; i<=date; i++){
    if (arr[i].action == 'buy'){
      total += arr[i].qty;
    } 
    else if (arr[i].action == 'sell'){
      total -= arr[i].qty;
    }
  }
  return total
}

function invValue(arr, date) {
  let invValue = 0;
  let totalQtySold = 0;
  let buy = {
    stack: [],
    totalQty: 0
  }

  for (let i=0; i<=date; i++){
    if (arr[i].action == 'buy'){
      buy.stack.push(arr[i]);
    } 
    else if (arr[i].action == 'sell'){
      totalQtySold += arr[i].qty
    }
  }

  for (let i=0; i<buy.stack.length; i++){
    if ( totalQtySold >= buy.stack[i].qty ){
      totalQtySold -= buy.stack[i].qty;
    } 
    else if ( totalQtySold < buy.stack[i].qty && totalQtySold > 0 ) {
      invValue = (buy.stack[i].qty - totalQtySold) * buy.stack[i].price;
      totalQtySold = 0;
    } 
    else {
      invValue += buy.stack[i].qty * buy.stack[i].price;
    }
  }
  return invValue;
}

invValue(dataSet, 8); 

module.exports = { totalQty, invValue }