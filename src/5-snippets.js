////////////////////////////////////////////////////////////////////////////////
// CORE JS SNIPPET MNEMONICS
////////////////////////////////////////////////////////////////////////////////

// IMPORT
import _ from 'lodash' // imp -> IMPort entire module with name
import 'fs' // imn -> IMport eNtire module
import { remove, filter, map, isArray } from 'lodash' // imd -> again
import * as lodash from 'lodash' // ime -> IMport Everything as alias
import { remove as rm } from 'lodash' // ima -> import aliased portion

// EXPORT
export const functionName = params => 0 + params // enf -> Export Named Function
export default params => 0 // edf -> Export Default Function
// export default class className {}; // ecl -> Export CLass
// export default class className extends baseclassName {}; // ece -> Export Class Extends

// CLASS
// constructor(params) {} // con -> CONstructor
// methodName(params) {} // met -> METhod
// get propertyName() {} // pge -> Property GEtter
// set propertyName(value) {} // pse -> Property SEtter

// FOR LOOPS
array.forEach(currentItem => {}) // fre -> FoR Each
for (const item of object) {
} // fof -> FOr oF
for (const item in object) {
} // fin -> For IN

// FUNCTIONS
params => {} // anfn -> ANonymous FuNction
const name = params => {} // nfn -> Named FuNction (arrow)

// DESTRUCTORS
const { propertyName } = objectToDestruct // dob -> Destructing OBject
const [propertyName4] = arrayToDestruct // dar -> Destructing ARray

// TIMER
setInterval(() => {}, intervalInms) // sti -> SeT Interval
setTimeout(() => {}, delayInms) // sto -> SeT timeOut

// ASYNC
// return new Promise((resolve, reject) => { }); // prom -> PROMise

// CONSOLE
console.assert(expression, object) // cas -> Console ASsert
console.clear() // ccl -> Console CLear
console.count(label) // cco -> Console COunt
console.error(object) // cer -> Console ERror
console.group('label') // cgr -> Console GRoup
console.log(object) // clg -> Console LoG
console.trace(object) // ctr -> Console TRace
console.warn(object) // cwr -> Console WaRn
console.table(object) // clt -> ConsoLe Table

////////////////////////////////////////////////////////////////////////////////
// EXTENSION ES6 SNIPPETS ALL DEFINITIONS
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
export const functionName2 = params => {}
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
const { propertyName3 } = objectToDestruct // ???
// dar→	destructing array syntax const [first, second] = [1,2]
const [propertyName2] = arrayToDestruct // ???
// sti→	set interval helper method setInterval(() => {});
setInterval2(() => {}, intervalInms)
// sto→	set timeout helper method setTimeout(() => {});
setTimeout2(() => {}, delayInms)
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
