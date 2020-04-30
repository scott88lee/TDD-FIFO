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
  return total;
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


module.exports = { totalQty, invValue }