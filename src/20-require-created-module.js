const module = require('./19-module-creation')

const log = console.log
log('arrayMax:', module.arrayMax([10, 1, 5]))
log('chunk:', module.chunk([1, 2, 3, 4, 5], 2))
log('compact:', module.compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]))
log('countOccurences:', module.countOccurences([1, 1, 2, 1, 2, 3], 1))
log('flatten:', module.flatten([1, [2], [3, [4]]]))
log('flattenDepth:', module.flattenDepth([1, [2], [[[3], 4], 5]], 2))
log('deepFlatten', module.deepFlatten([1, [2], [[3], 4], 5]))
log('difference:', module.difference([1, 2, 3], [1, 2, 4]))
log('differenceWith:', module.differenceWith([1, 1.2, 1.5, 3], [1.9, 3], (a, b) => Math.round(a) === Math.round(b)))
log('distictValuesOfArray:', module.distinceValuesOfArray([1, 2, 2, 3, 4, 4, 5]))
log('dropElements:', module.dropElements([1, 2, 3, 4], n => n >= 3))
log('dropRight:', module.dropRight([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4))
log('everyNth:', module.everyNth([1, 2, 3, 4, 5, 6], 2))
log('filterNonUnique', module.filterNonUnique([1, 2, 2, 3, 4, 4, 5]))
log('groupBy:', module.groupBy([6.1, 4.2, 6.3], Math.floor))
log('head:', module.head([1, 2, 3]))
log('initial:', module.initial([1, 2, 3]))
log('initArrayRange:', module.initArrayRange(7, 3))
log('initArrayFill:', module.initArrayFill(5, 2))
log('intersection:', module.intersection([1, 2, 3], [4, 3, 2]))
log('last:', module.last([1, 2, 3]))
log('mapObject:', module.mapObject([1, 2, 3, 4], a => a * a))
