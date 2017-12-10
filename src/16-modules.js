// A module always exists in its own file. You cannot put two modules in the same file.

// DIFFERENT IMPORT METHODS
import * as MathFuncs from 'module1' // IMPORTS ALL NAMED FUNCTIONS AS METHODS OF AN OBJECT
import { double } from './module1' // DECONSTRUCT AND IMPORT A SINGLE NAMED EXPORT
import { triple as trip } from './module1' // ALIAS A SINGLE NAMED EXPORT
import quintuple from './module1' // IMPORT THE DEFAULT EXPORT

console.log(MathFuncs.double(4))
console.log(double(4))
console.log(trip(4))
console.log(quintuple(4))
