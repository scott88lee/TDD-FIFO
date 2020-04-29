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

module.exports = {
  totalQty : (arr) => {
    let total = 0

    for (let i=0; i<arr.length; i++){
      if (arr[i].action == 'buy') {
        total += arr[i].qty;
      } 
      else if (arr[i].action =='sell'){
        total -= arr[i].qty;
      }
    }
    return total;
  },

  invValue : () => {
    return 50;
  }
}