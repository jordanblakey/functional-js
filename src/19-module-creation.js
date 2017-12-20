
// MODULE CREATION /////////////////////////////////////////////////////////////

module.exports = {
  // Get the max val of an array by spreading its vals as args to Math.max.
  arrayMax: array => Math.max(...array),
  // Chunks an array into smaller arrays of a specified size.
  chunk: (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => arr.slice(i * size, i * size + size)),
  // Remove falsey values from an array.
  compact: arr => arr.filter(Boolean),
  // Count the occurences of an value in an array
  countOccurences: (arr, val) => arr.reduce((acc, v) => v === val ? acc + 1 : acc + 0, 0),
  // Flatten an array
  flatten: arr => arr.reduce((a, v) => a.concat(v), []),
  // Flattens an array up to the specified depth.
  flattenDepth: (arr, depth = 1) => depth !== 1
    ? arr.reduce((a, v) => a.concat(Array.isArray(v)
    ? module.exports.flattenDepth(v, depth - 1) : v), [])
    : arr.reduce((a, v) => a.concat(v), []),
  // Deep flattens an array.
  deepFlatten: arr => [].concat(...arr.map(v => Array.isArray(v) ? module.exports.deepFlatten(v) : v)),
  // Returns the difference between two arrays.
  difference: (a, b) => { const s = new Set(b); return a.filter(x => !s.has(x))},
  // Filters out all values from an array for which the comparator function does not return true.
  differenceWith: (arr, val, comp) => arr.filter(a => !val.find(b => comp(a, b))),
  // Returns all the distinct values of an array.
  distinceValuesOfArray: arr => [...new Set(arr)],
  // Removes elements in an array untill the passed function returns true. Returns the remaining elements in the array.
  dropElements: (arr, func) => { while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1); return arr },
  // Returns a new array with n elements removed from the right.
  dropRight: (arr, n = 1) => n < arr.length ? arr.slice(0, arr.length - n) : [],
  // Returns every nth element in an array.
  everyNth: (arr, nth) => arr.filter((e, i) => i % nth === 0),
  // Filters out the non-unique values in an array.
  filterNonUnique: arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i)),
}

// TESTING /////////////////////////////////////////////////////////////////////

// const log = console.log
// log('arrayMax:', module.exports.arrayMax([10, 1, 5]))
// log('chunk:', module.exports.chunk([1, 2, 3, 4, 5], 2))
// log('compact:', module.exports.compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]))
// log('countOccurences:', module.exports.countOccurences([1, 1, 2, 1, 2, 3], 1))
// log('flatten:', module.exports.flatten([1, [2], [3, [4]]]))
// log('flattenDepth:', module.exports.flattenDepth([1, [2], [[[3], 4], 5]], 2))
// log('deepFlatten', module.exports.deepFlatten([1, [2], [[3], 4], 5]))
// log('difference:', module.exports.difference([1, 2, 3], [1, 2, 4]))
// log('differenceWith:', module.exports.differenceWith([1, 1.2, 1.5, 3], [1.9, 3], (a, b) => Math.round(a) === Math.round(b)))
// log('distictValuesOfArray:', module.exports.distinceValuesOfArray([1, 2, 2, 3, 4, 4, 5]))
// log('dropElements:', module.exports.dropElements([1, 2, 3, 4], n => n >= 3))
// log('dropRight:', module.exports.dropRight([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4))
// log('everyNth:', module.exports.everyNth([1, 2, 3, 4, 5, 6], 2))
// log('filterNonUnique', module.exports.filterNonUnique([1, 2, 2, 3, 4, 4, 5]))


// log('funcname:', module.exports.)
