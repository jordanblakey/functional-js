// The bind() method creates a new function that, when called, has its this
// keyword set to the provided value.

function talk() {
  console.log(this.sound)
}

let boromir = {
  speak: talk,
  sound: 'One does not simply walk into mordor!',
  boromirThis: function() {
    console.log("In boromirThis, 'this' refers to:\n", this)
  }, // this refers to boromir
  whatIsThis: this // refers to an empty object
}
boromir.boromirThis() // this refers to boromir

let talkBoundToBoromir = talk.bind(boromir) // CREATES A NEW FUNCTION WHERE THIS REFERS TO BOROMIR
talkBoundToBoromir() // this refers to boromir

// This accomplishes the same thing, permanently
boromir.talk = talk
boromir.talk() // Same output as talk.bind(boromir)()
boromir.speak()
let blabber = boromir.speak
console.log(blabber()) // because blabber is not a property of boromir, 'this' in talk refers to the global object

let gollum = {
  jabber: boromir.speak,
  sound: 'My preciousssss...'
}
gollum.jabber()

// EXAMPLE FROM MOZILLA ////////////////////////////////////////////////////////

this.x = 9 // this refers to global "window" object here in the browser
let mod = {
  x: 81,
  getX: function() {
    return this.x
  }
}
console.log(mod.getX()) // 81 - Function is invoked as property of mod

let retrieveX = mod.getX
console.log(retrieveX()) // returns 9 - Function invoked at the global scope

// Create a new function with 'this' bound to mod
// New programmers might confuse the
// global let x with mod's property x
let boundGetX = retrieveX.bind(mod)
console.log(boundGetX()) // 81
