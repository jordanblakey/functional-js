// https://medium.freecodecamp.org/node-js-child-processes-everything-you-need-to-know-e69498fe970a

// CLASS KEYWORD, CONSTRUCTOR, METHODS /////////////////////////////////////////
class Person {
  constructor(name) {
    // Use a constructor to supply initialization arguments to the class
    this.name = name
  }
  sayHello() {
    console.log("Hi, I'm " + this.name + '.')
  }
}

let p = new Person('Tom') // initialize a new Person
console.log(p.name) // Tom
p.sayHello()

// EXTENDS, SUPER //////////////////////////////////////////////////////////////
class Engineer extends Person {
  constructor(name, age) {
    super(name) // the super keyword lets us access the properties of the parent
    this.age = age
  }

  greet() {
    super.sayHello() // Note that you can use it outside the constructor
  }

  static log() {
    // Static allows the creation of non-inheriable utility classes
    console.log("I'm only accessible from the class, not its instances")
  }
}

let e = new Engineer('Chester', 34)
e.greet()
e.sayHello()
console.log(e.name)
// e.log() // Doesn't work
Engineer.log() // Works
