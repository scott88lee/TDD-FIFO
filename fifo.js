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
    stack: []
  }

  //Create a buy stack and a total sold number
  for (let i=0; i<=date; i++){
    if (arr[i].action == 'buy'){
      buy.stack.push(arr[i]);
    } 
    else if (arr[i].action == 'sell'){
      totalQtySold += arr[i].qty
    }
  }

  //Slowly eliminate sold number using the buy stacks
  //to find remainder
  for (let i=0; i<buy.stack.length; i++){
    if ( totalQtySold >= buy.stack[i].qty ){
      totalQtySold -= buy.stack[i].qty;
    } 
    else if ( totalQtySold < buy.stack[i].qty && totalQtySold > 0 ) {
      invValue = (buy.stack[i].qty - totalQtySold) * buy.stack[i].price;
      totalQtySold = 0; //remainder is added in this block
    } 
    else {//Unsold buy stacks are calculated as inventory.
      invValue += buy.stack[i].qty * buy.stack[i].price;
    }
  }
  return invValue;
}

function cogs(arr, i) {
  let sell = {
    stack: []
  }
  
  for (let i=0; i<=date; i++){
    if (arr[i].action == 'sell'){
      sell.stack.push(arr[i]);
    }
  }
  return 1;
}

module.exports = { totalQty, invValue }