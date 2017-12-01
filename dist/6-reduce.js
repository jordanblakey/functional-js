'use strict';

var orders = [{ amount: 250 }, { amount: 400 }, { amount: 100 }, { amount: 325 }];

// let totalAmount = 0
// for (let i = 0; i < orders.length; i++) {
//   totalAmount += orders[i].amount
// }
// console.log(totalAmount)

var ta = orders.reduce(function (sum, x) {
  console.log('hello', sum, x);
  return sum + x.amount;
}, 0);

console.log(ta);