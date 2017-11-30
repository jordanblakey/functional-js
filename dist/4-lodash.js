'use strict';

// import _ from 'lodash'
var _ = require('lodash');
var c = function c(x) {
  return console.log(x);
};
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var array2 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

c(_);
////////////////////////////////////////////////////////////////////////////////
// ARRAY UTILITIES
////////////////////////////////////////////////////////////////////////////////

// _.range()
// Return a list with specified range and step
// len x from zero
c(_.range(10));
// from x to y
c(_.range(1, 11));
// from index x to y, step z
c(_.range(0, 30, 5));

// Return an array of arrays with chunk size
c(_.chunk(array, 2));

// _.compact()
// Return a list with falsey values removed
c(_.compact([0, 1, false, 2, '', 3]));

// _.concat()
// Return a list concatenating
c(_.concat([1], 2, [3], [[4]]));

// Return the first array minus elements that exist in the second
c(_.difference(array, array2));
c(_.difference(array, array2, Math.floor));

// DIFFERENCE
_.differenceBy();
_.differenceWith();

// DROP
_.drop(); // Creates a slice of array with n elements dropped from the beginning
_.dropRight();
_.dropRightWhile();
_.dropWhile();

_.fill();

// FIND
_.findIndex(); // This method is like _.find except that it returns the index of the first element predicate returns truthy for instead of the element itself.
_.findLastIndex();

_.first();
_.head();
_.tail();

// FLATTEN
_.flatten(array); // Flattens array a single level deep.
_.flattenDeep(array); // Recursively flattens array.
_.flattenDepth(array, 1); // Recursively flatten array up to depth times.

_.fromPairs();

c(_.indexOf([1, 2, 1, 2], 2)); // 2 Return the index of the second argument. Also accepts a negative second argument to count back from the end.
_.lastIndexOf();

_.initial();

// INTERSECTION
c(_.intersection(array, array2)); // Creates an array of unique values that are included in all given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.
_.intersectionBy();
_.intersectionWith();

_.join(); // Converts all elements in array into a string separated by separator.
_.last(); // Gets the last element of array.
_.nth();

// PULL
_.pull(); // Removes all given values from array using SameValueZero for equality comparisons. Returns an array
_.pullAll(); // Like pull, but accepts an array and returns the inverse.
var pullArray = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }];
c(_.pullAllBy(pullArray, [{ x: 1 }, { x: 3 }], 'x'));
_.pullAllWith();
_.pullAt(); // Removes elements from array corresponding to indexes and returns an array of removed elements.

_.remove(); // Removes all elements from array that predicate returns truthy for and returns an array of the removed elements. The predicate is invoked with three arguments: (value, index, array).
_.slice();

// SORTED
_.reverse();
_.sortedIndex(); // Uses a binary search to determine the lowest index at which value should be inserted into array in order to maintain its sort order.
_.sortedIndexBy();
_.sortedIndexOf(); // This method is like _.indexOf except that it performs a binary search on a sorted array.
_.sortedLastIndex();
_.sortedLastIndexBy();
_.sortedLastIndexOf();
_.sortedUniq(); // This method is like _.uniq except that it's designed and optimized for sorted arrays.
_.sortedUniqBy();

// TAKE
_.take();
_.takeRight();
_.takeRightWhile();
_.takeWhile();

// UNION
_.union(); // Creates an array of unique values, in order, from all given arrays using SameValueZero for equality comparisons.
_.unionBy();
_.unionWith();

// UNIQ
_.uniq(); // Creates a duplicate-free version of an array, using SameValueZero for equality comparisons, in which only the first occurrence of each element is kept. The order of result values is determined by the order they occur in the array.
_.uniqBy();
_.uniqWith();

_.without();

_.xor();
_.xorBy();
_.xorWith();

// ZIP
_.unzip();
_.unzipWith();
var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
c(zipped); // Creates an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on.
// => [['a', 1, true], ['b', 2, false]]
c(_.unzip(zipped));

_.zipObject();
_.zipObjectDeep();
_.zipWith();

////////////////////////////////////////////////////////////////////////////////
// COLLECTION/OBJECT UTILITIES
////////////////////////////////////////////////////////////////////////////////
_.countBy();

// EACH
_.each();
_.forEach(); // Iterates over elements of collection and invokes iteratee for each element. The iteratee is invoked with three arguments: (value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning false.
_.eachRight();
_.forEachRight();

_.every();

// FILTER
_.filter(); // Iterates over elements of collection, returning an array of all elements predicate returns truthy for. The predicate is invoked with three arguments: (value, index|key, collection).
_.reject(); // Inverse of filter

// FIND
_.find(); // Iterates over elements of collection, returning the first element predicate returns truthy for. The predicate is invoked with three arguments: (value, index|key, collection).
_.findLast(); // This method is like _.find except that it iterates over elements of collection from right to left.

// FLAT MAP ???
_.flatMap(); // Creates a flattened array of values by running each element in collection thru iteratee and flattening the mapped results. The iteratee is invoked with three arguments: (value, index|key, collection).
function duplicate(n) {
  return [n, n];
}
_.flatMap([1, 2], duplicate);
// => [1, 1, 2, 2]
function duplicate2(n) {
  return [[[n, n]]];
}
c(_.flatMapDeep([1, 2], duplicate2));
// => [1, 1, 2, 2]
_.flatMapDepth();

// GROUPING
c(_.groupBy([6.1, 4.2, 6.3], Math.floor));
// => { '4': [4.2], '6': [6.1, 6.3] }

// SORTING
c(_.shuffle([1, 2, 3, 4])); //Creates an array of shuffled values, using a version of the Fisher-Yates shuffle.

_.size();
_.some();

var users = [{ user: 'fred', age: 48 }, { user: 'barney', age: 36 }, { user: 'fred', age: 40 }, { user: 'barney', age: 34 }];
c(_.sortBy(users, ['user', 'age'])); // Creates an array of elements, sorted in ascending order by the results of running each element in a collection thru each iteratee. This method performs a stable sort, that is, it preserves the original sort order of equal elements. The iteratees are invoked with one argument: (value).

_.includes();
_.invokeMap();
_.keyBy();
_.map();
_.orderBy();
_.partition();

// REDUCE
c(_.reduce([1, 2], function (sum, n) {
  return sum + n;
}));
c(_.reduce({ a: 1, b: 2, c: 1 }, function (result, value, key) {
  ;(result[value] || (result[value] = [])).push(key);
  return result;
}, {}));
var array3 = [[1, 2], [2, 3], [4, 5]];
c(_.reduceRight(array3, function (flattened, other) {
  return flattened.concat(other);
}, []));

// SAMPLE ???
c(_.sample([1, 2, 3, 4])); // Gets a random element from collection.
c(_.sampleSize([1, 2, 3, 4], 2)); // Gets n random elements at unique keys from collection up to the size of collection.

// Date
c(_.now()); // Gets the timestamp of the number of milliseconds that have elapsed since the Unix epoch (1 January 1970 00:00:00 UTC).

// Function
var saves = ['profile', 'settings'];
var done = _.after(saves.length, function () {
  console.log('done saving!');
});
_.forEach(saves, function (type) {
  //asyncSave({ 'type': type, 'complete': done });
});
// _.ary()
// _.before()

// BIND
// _.bind()
// _.bindKey()

// CURRY
// _.curry()
// _.curryRight()

// _.debounce()

// _.defer()
// _.delay()

// _.flip()
// _.memoize()
// _.negate()
// _.once()
// _.overArgs()
// _.partial()
// _.partialRight()
// _.rearg()
// _.rest()
// _.spread()
// _.throttle()
// _.unary()
// _.wrap()

// Lang
_.castArray();

// CLONE
_.clone();
_.cloneDeep();
_.cloneDeepWith();
_.cloneWith();

_.conformsTo();

// COMPARISON
_.eq();
_.gt();
_.gte();
_.lt();
_.lte();

// TYPE COMPARISON
_.isArguments();
_.isArray();
_.isArrayBuffer();
_.isArrayLike();
_.isArrayLikeObject();
_.isBoolean();
_.isBuffer();
_.isDate();
_.isElement();
_.isEmpty();
_.isEqual();
_.isEqualWith();
_.isError();
_.isFinite();
_.isFunction();
_.isInteger();
_.isLength();
_.isMap();
_.isMatch();
_.isMatchWith();
_.isNaN();
_.isNative();
_.isNil();
_.isNull();
_.isNumber();
_.isObject();
_.isObjectLike();
_.isPlainObject();
_.isRegExp();
_.isSafeInteger();
_.isSet();
_.isString();
_.isSymbol();
_.isTypedArray();
_.isUndefined();
_.isWeakMap();
_.isWeakSet();

// CONVERSION
_.toArray();
_.toFinite();
_.toInteger();
_.toLength();
_.toNumber();
_.toPlainObject();
_.toSafeInteger();
_.toString();

// Math
_.add();
_.ceil();
_.divide();
_.floor();
_.max();
_.maxBy();
_.mean();
_.meanBy();
_.min();
_.minBy();
_.multiply();
_.round();
_.subtract();
_.sum();
_.sumBy();

// Number
_.clamp();
_.inRange();
_.random();

// Object
_.assign();
_.assignIn();
_.assignInWith();
_.assignWith();

_.at();
_.create();
_.defaults();
_.defaultsDeep();

_.entries();
_.toPairs();

_.entriesIn();
_.toPairsIn();

_.extend();
_.assignIn();

_.extendWith();
_.assignInWith();

_.findKey();
_.findLastKey();

_.forIn();
_.forInRight();

_.forOwn();
_.forOwnRight();

_.functions();
_.functionsIn();

_.get();

_.has();
_.hasIn();

_.invert();
_.invertBy();

_.invoke();
_.keys();
_.keysIn();

_.mapKeys();
_.mapValues();

_.merge();
_.mergeWith();

_.omit();
_.omitBy();

_.pick();
_.pickBy();

_.result();

_.set();
_.setWith();
_.unset();

_.toPairs();
_.toPairsIn();

_.transform();

_.update();
_.updateWith();

_.values();
_.valuesIn();

// Seq
_.chain();
// _.tap()
// _.thru()

// _.prototype[Symbol.iterator]
// _.prototype.at()
// _.prototype.chain()
// _.prototype.commit()
// _.prototype.next()
// _.prototype.plant()
// _.prototype.reverse()
// _.prototype.toJSON()
// _.value()
// _.prototype.value()
// _.prototype.valueOf()
// _.value()

////////////////////////////////////////////////////////////////////////////////
// String
////////////////////////////////////////////////////////////////////////////////

// CASE
_.camelCase();
_.kebabCase();
_.lowerCase();
_.snakeCase();
_.startCase();
_.upperCase();
_.capitalize();
_.lowerFirst();
_.upperFirst();
_.toLower();
_.toUpper();

_.repeat();
_.replace();
_.split();
_.deburr();
_.escape();
_.unescape();

_.escapeRegExp();

_.endsWith();
_.startsWith();

// PAD
_.pad();
_.padEnd();
_.padStart();

_.parseInt();

_.template();

// TRIM
_.trim();
_.trimEnd();
_.trimStart();
_.truncate();

_.words();

// Util

_.attempt();
_.bindAll();
_.cond();
_.conforms();
_.constant();
_.defaultTo();
_.flow();
_.flowRight();
_.identity();
_.iteratee();
_.matches();
_.matchesProperty();

// METHOD
_.method();
_.methodOf();

_.mixin();
_.noConflict();
_.noop();
_.nthArg();

// OVER
_.over();
_.overEvery();
_.overSome();

// PROPERTY
_.property();
_.propertyOf();

// RANGE
_.range();
_.rangeRight();
_.runInContext();

_.stubArray();
_.stubFalse();
_.stubObject();
_.stubString();
_.stubTrue();
_.times();
_.toPath();
_.uniqueId();

// Properties
// _.templateSettings()
// _.templateSettings.escape()
// _.templateSettings.evaluate()
// _.templateSettings.imports()
// _.templateSettings.interpolate()
// _.templateSettings.variable()
// Methods
// _.templateSettings.imports()