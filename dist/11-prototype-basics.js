'use strict';

function talk() {
  // console.log(this)
  console.log(this.sound);
}

var animal = {
  talk: talk // declaration and assigment


  // body
};var cat = {
  sound: 'meow!'
};

Object.setPrototypeOf(cat, animal);
cat.talk();

// Object.setPrototypeOf(animal, cat) // can work both ways
// animal.talk()

var dog = {
  sound: 'woof!'
};

animal.talk = function () {
  console.log('I am a little teapot, ' + this.sound);
};

Object.setPrototypeOf(dog, animal);
dog.talk();

var prarieDog = {
  howl: function howl() {
    console.log(this.sound.toUpperCase());
  }
  // sound: 'MERRRAHHH!' // Note that set properties OVERRIDE THE PROTOTYPE
};
Object.setPrototypeOf(prarieDog, dog);
prarieDog.howl();