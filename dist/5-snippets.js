'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.functionName = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); ////////////////////////////////////////////////////////////////////////////////
// FROM EXTENSION ES6 SNIPPETS
////////////////////////////////////////////////////////////////////////////////

// # IMPORT AND EXPORT
// imp→	imports entire module import fs from 'fs';

// imn→	imports entire module without module name import 'animate.css'

// imd→	imports only a portion of the module using destructing import {rename} from 'fs';

// ime→	imports everything as alias from the module import * as localAlias from 'fs';

// ima→	imports only a portion of the module as alias import { rename as localRename } from 'fs';


var _filter = require('./1-filter');

var _filter2 = _interopRequireDefault(_filter);

var _module = require('module');

var alias = _interopRequireWildcard(_module);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// enf→	exports name function export const log = (parameter) => { console.log(parameter);};
var functionName = exports.functionName = function functionName(params) {};
// edf→	exports default function export default (parameter) => { console.log(parameter);};

exports.default = function (params) {};
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
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = object[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var item = _step.value;
  } // ??? Difference in of vs in?
  // fin→	for ... in loop for(const item in object) {}
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

for (var _item in object) {}
// anfn→	creates an anonymous function (params) => {}
(function (params) {});
// nfn→	creates a named function const add = (params) => {}
var name2 = function name2(params) {};
// dob→	destructing object syntax const {rename} = fs
var _objectToDestruct = objectToDestruct,
    propertyName = _objectToDestruct.propertyName; // ???
// dar→	destructing array syntax const [first, second] = [1,2]

var _arrayToDestruct = arrayToDestruct,
    _arrayToDestruct2 = _slicedToArray(_arrayToDestruct, 1),
    propertyName2 = _arrayToDestruct2[0]; // ???
// sti→	set interval helper method setInterval(() => {});


setInterval(function () {}, intervalInms);
// sto→	set timeout helper method setTimeout(() => {});
setTimeout(function () {}, delayInms);
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

// FROM EXTENSION FUNCTIONAL SNIPPETS
// fn→ function youEdit(youEdit2) {}
function index(index) {}
// fne→ const youEdit = function(youEdit2) {};
var index2 = function index2(index) {};
// afn→ function(youEdit) {}
// function(arg) {}
// ae→ const youEdit = (youEdit2) => {};
var name = function name(arg) {};
// aa→ (youEdit) => {}
(function (arg) {});
// mfn→ youEdit.map((youEdit2) => {})
name.map(function (arg) {});
// ifn→ youEdit.includes(youEdit2)
name.includes(arg);
// ffn→ youEdit.filter((youEdit2) => {})
name.filter(function (arg) {});
// fefn→ youEdit.forEach((youEdit2) => {});
index.forEach(function (index) {});
// sfn→ youEdit.some((youEdit2) => {})
index.some(function (index) {});
// efn→ youEdit.every((youEdit2) => {})
index.every(function (index) {});
// rfn→ youEdit.reduce((youEdit2) => {})
index.reduce(function (index) {});
// cfn→ youEdit.concat(youEdit2)
index.concat(index);
// slfn→ youEdit.slice(youEdit2)
index.slice(index);
// spfn→ youEdit.split(youEdit2)
index.split(index);
// jfn→ youEdit.join(youEdit)
index.join(index);
// clg→ console.log(youEdit)
console.log(index);
// clgs→ console.log(`youEdit`)
console.log('index');
// cw→ console.warn(youEdit)
console.warn(index);
// cws→ console.warn(`youEdit`)
console.warn('index');
// ce→ console.error(youEdit)
console.error(index);
// ces→ console.error(`youEdit`)
console.error('index')(
// iife→ (function youEdit(){})();
function index() {})()
// umdmd→ UMD module without params
;(function (context, factory) {
  if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  } else {
    context.yourModuleName = factory();
  }
})(undefined, function () {
  // your module body
})
// umdmdp→ UMD module with params
;(function (context, factory) {
  if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
    module.exports = factory(require('b'));
  } else if (typeof define === 'function' && define.amd) {
    define(['b'], factory);
  } else {
    context.yourModuleName = factory(context.b);
  }
})(undefined, function (b) {
  // your module body
});