// Import an entire module for side effects only, without importing anything.
// This runs the module's global code, but doesn't actually import any values.
// import '/index.js';

// import indexDefault from './index' // Aliases the default export
// NOTE THIS IS NOT THE SAME AS IMPORT * AS INDEX, WHICH GETS THE NAMED EXPORTS TOO.

import * as index from './17-exports-in-depth' // import's all of index's exports as an object.
console.log(index) // log the object to see how to handle its contents.

const class1 = new index.Class() // create an instance of index.Class()

// CALL THE VALUES (which happen to be functions) from the imported object, 'index'
class1.exportTest1()
index.exportTest2()
index.exportTest3()
index.exportTest4()
index.exportTest5()
index.exportObjTest.exportTest6()

// Accessing the class from index's default export using 'default()' as the constructor
const class3 = new index.default()
class3.exportTest7()

// Using the second import method we assign './index'.default
// (which happens to be a constructor) to DefClass (renamed as DefClass2)
// ...damn
import DefClass2 from './17-exports-in-depth'
const class2 = new DefClass2()
class2.exportTest7()

// Note that we can't deconstruct the default export. This doesn't work because
// the default keyword renames any provided name.
// import { DefaultClass } from './index' // can't import the default using
// const class4 = new DefaultClass()
// class4.exportTest7()


// Do all of the above again using deconstruction.
import {
  Class,
  exportTest2,
  exportTest3,
  exportTest4,
  exportTest5,
  exportObjTest
  // default // note again that we can't import the default using deconstruction
} from './17-exports-in-depth'

const class5 = new Class()

class5.exportTest1()
exportTest2()
exportTest3()
exportTest4()
exportTest5()
exportObjTest.exportTest6()