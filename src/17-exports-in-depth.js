// Exporting a class
export class Class{
  exportTest1() {
    console.log("I'm an export")
  }
}

// Exporting a constant containing an anonymous function using object deconstruction
// Where is it deconstructing exportTest2 from?
const exportTest2 = function() {
  console.log("I'm an export 2!")
}
export { exportTest2 }

// Exporting a constant containing an anon function.
export const exportTest3 = function() {
  console.log("I'm an export 3!")
}

// Exporting a constant containing an arrow function.
export const exportTest4 = () => console.log("I'm an export 4!")

// Exporting a named function directly.
export function exportTest5() {
  console.log("I'm an export 5!")
}

// exporting a constant containing an object, containing a key exportTest6 with an anon function as its value.
export const exportObjTest = {
  exportTest6: function() {console.log("I'm an export 6!")}
}

// Exporting a class as the default
export default class DefaultClass{
  exportTest7() {
    console.log("I'm an export 7!")
  }
}

// export * from ... // No idea what this does