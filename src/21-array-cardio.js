const log = console.log

// ARRAY CARDIO

// Create an array of x length with values matching the indexes
let arr = Array.from(Array(10).keys())
//
let arr01 = Array.from(new Array(10), (_, x) => x + 1)
log('Array.from(<array>.keys()):', arr)
log('Array.from(new Array(10), (_, x) => x + 1):', arr01)

// Create an array of length w and fill it with x from index y to z
let arr2 = Array(10).fill(10, 0, 10)
log('<array>.fill():', arr2)

// Create an array from a string, 2 methods
let arr3 = 'foo'.split('')
log('Array from <string>.split()', arr3)
arr3 = Array.from('foo')
log('Array.from(<string>):', arr3)

// Map implementation/array comprehension using Array.from()
let arr4 = Array.from([1, 2, 3], x => x * x)
log('Array.from(<array>, fn(x){x}) list comprehension/map:', arr4)

let arr5 = [1, 2, 3].map(x => x * x)
log('<array>.map(x => x):', arr5)

