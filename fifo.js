function totalQty(arr, date) {
  let total = 0;

  for (let i=0; i<=date; i++){
    if (arr[i].action == 'buy'){
      total += arr[i].qty;
    } else if (arr[i].action == 'sell'){
      total -= arr[i].qty;
    }
  }
  return total
}

function invValue() {
  return true
}

module.exports = { totalQty, invValue }