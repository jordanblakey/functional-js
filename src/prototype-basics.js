function talk() {
  // console.log(this)
  console.log(this.sound)
}

let animal = {
  talk // declaration and assigment
}

// body
let cat = {
  sound: 'meow!'
}

Object.setPrototypeOf(cat, animal)
cat.talk()

// Object.setPrototypeOf(animal, cat) // can work both ways
// animal.talk()

let dog = {
  sound: 'woof!'
}

animal.talk = function() {
  console.log('I am a little teapot, ' + this.sound)
}

Object.setPrototypeOf(dog, animal)
dog.talk()

let prarieDog = {
  howl: function() {
    console.log(this.sound.toUpperCase())
  }
}
Object.setPrototypeOf(prarieDog, dog)
prarieDog.howl()
