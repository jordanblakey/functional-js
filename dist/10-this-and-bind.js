'use strict';

// The bind() method creates a new function that, when called, has its this
// keyword set to the provided value.

function talk() {
  console.log(this.sound);
}

var boromir = {
  speak: talk,
  sound: 'One does not simply walk into mordor!',
  boromirThis: function boromirThis() {
    console.log("In boromirThis, 'this' refers to:\n", this);
  }, // this refers to boromir
  whatIsThis: undefined // refers to an empty object
};
boromir.boromirThis(); // this refers to boromir

var talkBoundToBoromir = talk.bind(boromir); // CREATES A NEW FUNCTION WHERE THIS REFERS TO BOROMIR
talkBoundToBoromir(); // this refers to boromir

// This accomplishes the same thing, permanently
boromir.talk = talk;
boromir.talk(); // Same output as talk.bind(boromir)()
boromir.speak();
var blabber = boromir.speak;
console.log(blabber()); // because blabber is not a property of boromir, 'this' in talk refers to the global object

var gollum = {
  jabber: boromir.speak,
  sound: 'My preciousssss...'
};
gollum.jabber();

// EXAMPLE FROM MOZILLA ////////////////////////////////////////////////////////

undefined.x = 9; // this refers to global "window" object here in the browser
var mod = {
  x: 81,
  getX: function getX() {
    return this.x;
  }
};
console.log(mod.getX()); // 81 - Function is invoked as property of mod

var retrieveX = mod.getX;
console.log(retrieveX()); // returns 9 - Function invoked at the global scope

// Create a new function with 'this' bound to mod
// New programmers might confuse the
// global let x with mod's property x
var boundGetX = retrieveX.bind(mod);
console.log(boundGetX()); // 81