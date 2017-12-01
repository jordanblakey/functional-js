'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.functionName2 = exports.functionName = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); ////////////////////////////////////////////////////////////////////////////////
// CORE JS SNIPPET MNEMONICS
////////////////////////////////////////////////////////////////////////////////

// IMPORT
// imp -> IMPort entire module with name
// imn -> IMport eNtire module
// imd -> again
// ime -> IMport Everything as alias


var _lodash = require('lodash');

var lodash = _interopRequireWildcard(_lodash);

require('fs');

var _filter = require('./1-filter');

var _filter2 = _interopRequireDefault(_filter);

var _module = require('module');

var alias = _interopRequireWildcard(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// ima -> import aliased portion

// EXPORT
var functionName = exports.functionName = function functionName(params) {
  return 0 + params;
}; // enf -> Export Named Function

exports.default = function (params) {
  return 0;
}; // edf -> Export Default Function
// export default class className {}; // ecl -> Export CLass
// export default class className extends baseclassName {}; // ece -> Export Class Extends

// CLASS
// constructor(params) {} // con -> CONstructor
// methodName(params) {} // met -> METhod
// get propertyName() {} // pge -> Property GEtter
// set propertyName(value) {} // pse -> Property SEtter

// FOR LOOPS


array.forEach(function (currentItem) {}); // fre -> FoR Each
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = object[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var item = _step.value;
  } // fof -> FOr oF
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

for (var _item in object) {} // fin -> For IN

// FUNCTIONS
(function (params) {}); // anfn -> ANonymous FuNction
var name = function name(params) {}; // nfn -> Named FuNction (arrow)

// DESTRUCTORS
var _objectToDestruct = objectToDestruct,
    propertyName = _objectToDestruct.propertyName; // dob -> Destructing OBject

var _arrayToDestruct = arrayToDestruct,
    _arrayToDestruct2 = _slicedToArray(_arrayToDestruct, 1),
    propertyName4 = _arrayToDestruct2[0]; // dar -> Destructing ARray

// TIMER


setInterval(function () {}, intervalInms); // sti -> SeT Interval
setTimeout(function () {}, delayInms); // sto -> SeT timeOut

// ASYNC
// return new Promise((resolve, reject) => { }); // prom -> PROMise

// CONSOLE
console.assert(expression, object); // cas -> Console ASsert
console.clear(); // ccl -> Console CLear
console.count(label); // cco -> Console COunt
console.error(object); // cer -> Console ERror
console.group('label'); // cgr -> Console GRoup
console.log(object); // clg -> Console LoG
console.trace(object); // ctr -> Console TRace
console.warn(object); // cwr -> Console WaRn
console.table(object); // clt -> ConsoLe Table

////////////////////////////////////////////////////////////////////////////////
// EXTENSION ES6 SNIPPETS ALL DEFINITIONS
////////////////////////////////////////////////////////////////////////////////

// # IMPORT AND EXPORT
// imp→	imports entire module import fs from 'fs';

// imn→	imports entire module without module name import 'animate.css'

// imd→	imports only a portion of the module using destructing import {rename} from 'fs';

// ime→	imports everything as alias from the module import * as localAlias from 'fs';

// ima→	imports only a portion of the module as alias import { rename as localRename } from 'fs';

// enf→	exports name function export const log = (parameter) => { console.log(parameter);};
var functionName2 = exports.functionName2 = function functionName2(params) {};
// edf→	exports default function export default (parameter) => { console.log(parameter);};
// export default params => {}
// ecl→	exports default class export default class Calculator { };
// export default class className {};
// ece→	exports default class by extending a base one export default class Calculator extends BaseClass { };
// export default class className extends baseclassName {};

// # CLASS HELPERS
// con→	adds default constructor in the class constructor() {}
// constructor(params) {} // ???
// met→	creates a method inside a class add() {}
// methodName(params) {}
// pge→	creates a getter property get propertyName() {return value;}
// get propertyName() { return this.; } // ???
// pse→	creates a setter property set propertyName(value) {}
// set propertyName(value) {} // ???

// VARIOUS METHODS
// fre→	forEach loop in ES6 syntax array.forEach(currentItem => {})
array.forEach(function (currentItem) {});
// fof→	for ... of loop for(const item of object) {}
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = object[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var _item2 = _step2.value;
  } // ??? Difference in of vs in?
  // fin→	for ... in loop for(const item in object) {}
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2.return) {
      _iterator2.return();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

for (var _item3 in object) {}
// anfn→	creates an anonymous function (params) => {}
(function (params) {});
// nfn→	creates a named function const add = (params) => {}
var name2 = function name2(params) {};
// dob→	destructing object syntax const {rename} = fs
var _objectToDestruct2 = objectToDestruct,
    propertyName3 = _objectToDestruct2.propertyName3; // ???
// dar→	destructing array syntax const [first, second] = [1,2]

var _arrayToDestruct3 = arrayToDestruct,
    _arrayToDestruct4 = _slicedToArray(_arrayToDestruct3, 1),
    propertyName2 = _arrayToDestruct4[0]; // ???
// sti→	set interval helper method setInterval(() => {});


setInterval2(function () {}, intervalInms);
// sto→	set timeout helper method setTimeout(() => {});
setTimeout2(function () {}, delayInms);
// prom→	creates a new Promise return new Promise((resolve, reject) => {});
// return new Promise((resolve, reject) => {});

// # CONSOLE METHODS
// cas→	console alert method console.assert(expression, object)
console.assert(expression, object); // ???
// ccl→	console clear console.clear()
console.clear();
// cco→	console count console.count(label)
console.count(label);
// cdi→	console dir console.dir
console.dir(object);
// cer→	console error console.error(object)
console.error(object);
// cgr→	console group console.group(label)
console.group('label');
// cge→	console groupEnd console.groupEnd()
console.groupEnd();
// clg→	console log console.log(object)
console.log(object);
// ctr→	console trace console.trace(object)
console.trace(object);
// cwa→	console warn console.warn
console.warn(object);
// cin→	console info console.info
console.info(object);
// clt→	console table console.table
console.table(object);