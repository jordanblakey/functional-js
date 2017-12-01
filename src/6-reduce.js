let orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
]
// BASIC EXAMPLE ///////////////////////////////////////////////////////////////
// PROCEDURAL
let totalAmount = 0
for (let i = 0; i < orders.length; i++) {
  totalAmount += orders[i].amount
}
console.log(totalAmount)

// USING MAP TO ACCUMULATE THE SAME ITERABLE AGAINST A FUNCTION
let ta = orders.reduce((sum, x) => {
  console.log('iteration', sum, x)
  return sum + x.amount
  // The return container below can be int, string, or a collection
}, 0)
console.log(ta)

// Condensed
let ta2 = orders.reduce((sum, x) => sum + x.amount, 0)
console.log(ta2)

// ADVANCED REDUCE EXAMPLE ////////////////////////////////////////////////////////////
// Convert a tsv file to an object literal

// import fs from 'fs'
let fs = require('fs')
let output = fs
  .readFileSync('src/data.txt', 'utf8')
  .trim()
  .split('\n')
  .map(line => line.split('\t'))
  .reduce((customers, line) => {
    console.log(line)
    customers[line[0]] = customers[line[0]] || []
    customers[line[0]].push({
      name: line[1],
      price: line[2],
      quantity: line[3]
    })
    return customers
  }, {})

console.log('[output]:', JSON.stringify(output, null, 2))
