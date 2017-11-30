////////////////////////////////////////////////////////////////////////////////
// FROM EXTENSION ES6 SNIPPETS
////////////////////////////////////////////////////////////////////////////////

// # IMPORT AND EXPORT
// imp→	imports entire module import fs from 'fs';
import isDog from './1-filter'
// imn→	imports entire module without module name import 'animate.css'
import 'module'
// imd→	imports only a portion of the module using destructing import {rename} from 'fs';
import {} from 'module'
// ime→	imports everything as alias from the module import * as localAlias from 'fs';
import * as alias from 'module'
// ima→	imports only a portion of the module as alias import { rename as localRename } from 'fs';
import { originalName as alias2 } from 'module'
// enf→	exports name function export const log = (parameter) => { console.log(parameter);};
export const functionName = params => {}
// edf→	exports default function export default (parameter) => { console.log(parameter);};
export default params => {}
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
array.forEach(currentItem => {})
// fof→	for ... of loop for(const item of object) {}
for (const item of object) {
} // ??? Difference in of vs in?
// fin→	for ... in loop for(const item in object) {}
for (const item in object) {
}
// anfn→	creates an anonymous function (params) => {}
params => {}
// nfn→	creates a named function const add = (params) => {}
const name2 = params => {}
// dob→	destructing object syntax const {rename} = fs
const { propertyName } = objectToDestruct // ???
// dar→	destructing array syntax const [first, second] = [1,2]
const [propertyName2] = arrayToDestruct // ???
// sti→	set interval helper method setInterval(() => {});
setInterval(() => {}, intervalInms)
// sto→	set timeout helper method setTimeout(() => {});
setTimeout(() => {}, delayInms)
// prom→	creates a new Promise return new Promise((resolve, reject) => {});
// return new Promise((resolve, reject) => {});

// # CONSOLE METHODS
// cas→	console alert method console.assert(expression, object)
console.assert(expression, object) // ???
// ccl→	console clear console.clear()
console.clear()
// cco→	console count console.count(label)
console.count(label)
// cdi→	console dir console.dir
console.dir(object)
// cer→	console error console.error(object)
console.error(object)
// cgr→	console group console.group(label)
console.group('label')
// cge→	console groupEnd console.groupEnd()
console.groupEnd()
// clg→	console log console.log(object)
console.log(object)
// ctr→	console trace console.trace(object)
console.trace(object)
// cwa→	console warn console.warn
console.warn(object)
// cin→	console info console.info
console.info(object)
// clt→	console table console.table
console.table(object)

// FROM EXTENSION FUNCTIONAL SNIPPETS
// fn→ function youEdit(youEdit2) {}
function index(index) {}
// fne→ const youEdit = function(youEdit2) {};
const index2 = function(index) {}
// afn→ function(youEdit) {}
// function(arg) {}
// ae→ const youEdit = (youEdit2) => {};
const name = arg => {}
// aa→ (youEdit) => {}
arg => {}
// mfn→ youEdit.map((youEdit2) => {})
name.map(arg => {})
// ifn→ youEdit.includes(youEdit2)
name.includes(arg)
// ffn→ youEdit.filter((youEdit2) => {})
name.filter(arg => {})
// fefn→ youEdit.forEach((youEdit2) => {});
index.forEach(index => {})
// sfn→ youEdit.some((youEdit2) => {})
index.some(index => {})
// efn→ youEdit.every((youEdit2) => {})
index.every(index => {})
// rfn→ youEdit.reduce((youEdit2) => {})
index.reduce(index => {})
// cfn→ youEdit.concat(youEdit2)
index.concat(index)
// slfn→ youEdit.slice(youEdit2)
index.slice(index)
// spfn→ youEdit.split(youEdit2)
index.split(index)
// jfn→ youEdit.join(youEdit)
index.join(index)
// clg→ console.log(youEdit)
console.log(index)
// clgs→ console.log(`youEdit`)
console.log(`index`)
// cw→ console.warn(youEdit)
console.warn(index)
// cws→ console.warn(`youEdit`)
console.warn(`index`)
// ce→ console.error(youEdit)
console.error(index)
// ces→ console.error(`youEdit`)
console.error(`index`)(
  // iife→ (function youEdit(){})();
  function index() {}
)()
// umdmd→ UMD module without params
;(function(context, factory) {
  if (typeof exports === 'object') {
    module.exports = factory()
  } else if (typeof define === 'function' && define.amd) {
    define(factory)
  } else {
    context.yourModuleName = factory()
  }
})(this, function() {
  // your module body
})
// umdmdp→ UMD module with params
;(function(context, factory) {
  if (typeof exports === 'object') {
    module.exports = factory(require('b'))
  } else if (typeof define === 'function' && define.amd) {
    define(['b'], factory)
  } else {
    context.yourModuleName = factory(context.b)
  }
})(this, function(b) {
  // your module body
})
