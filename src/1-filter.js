import _ from 'lodash'

let animals = [
  { name: 'Fluffykins', species: 'rabbit' },
  { name: 'Caro', species: 'dog' },
  { name: 'Hamilton', species: 'rabbit' },
  { name: 'Harold', species: 'dog' },
  { name: 'Ursula', species: 'dog' },
  { name: 'Jimmy', species: 'dog' }
]

// FILTER USING IMPERATIVE METHOD
// More logic, harder ro reason about, less readable, doesn't scale well.
let dogs = []
for (let i = 0; i < animals.length; i++) {
  if (animals[i].species === 'dog') dogs.push(animals[i])
}
let notDogs = []
for (let i = 0; i < animals.length; i++) {
  if (animals[i].species !== 'dog') dogs.push(animals[i])
}

// FILTER USING FUNCTIONAL METHOD
// Small, single-responsibility, composable, reusable functions.
export let isDog = animal => {
  return animal.species === 'dog'
}
let dogs2 = animals.filter(isDog)
let notDogs2 = animals.filter(e => !isDog(e))

// USING LODASH INSTEAD
let dogs3 = _.filter(animals, ['species', 'dog'])
let notDogs3 = _.reject(animals, ['species', 'dog'])

// NOTE THAT ARROW FUNCTIONS AREN'T MORE TERSE
function a(x) {
  console.log(x)
}
a('x')

let b = y => {
  console.log(y)
}
b('y')

console.log(dogs, notDogs, dogs2, notDogs2, dogs3, notDogs3)
