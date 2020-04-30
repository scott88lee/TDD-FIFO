### TDD-FIFO exercise
Write functions to calculate inventory holdings, value, cogs and profit in fifo.js file, with testing library JEST, using the TDD methodology. Purchase and Sales are recorded in the First-In First-out accounting style.

```
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
```

##### To calculate inventory holdings;
Functions accepts a date and outputs the quantity of total quantity of goods in stock at point in time ( using array index 0 to 8 )

##### To calculate inventory value;
Functions accepts a date and outputs the quantity of total value of goods in stock at point in time ( using array index 0 to 8 )

##### To calculate COGS;
Functions accepts a date and outputs the cost of goods sold at point in time.
Advance objective: accept a date range, and outputs COGS. ( using array index 0 to 8 )

##### To calculate Profit;
Functions accepts a date range and outputs the profict at point in time. ( using array index 0 to 8 )

