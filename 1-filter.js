let animals = [
  {name: 'Fluffykins', species: 'rabbit' },
  {name: 'Caro', species: 'dog' },
  {name: 'Hamilton', species: 'rabbit'},
  {name: 'Harold', species: 'dog'},
  {name: 'Ursula', species: 'dog'},
  {name: 'Jimmy', species: 'dog'}
]


// PROCEDURAL FILTER IMPLEMENTATION
// More logic, harder ro reason about, less readable, doesn't scale well.
let dogs = []
for (let i = 0; i < animals.length; i++) {
  if (animals[i].species === 'dog') dogs.push(animals[i])
}
let notDogs = []
for (let i = 0; i < animals.length; i++) {
  if (animals[i].species !== 'dog') dogs.push(animals[i])
}


// FUNCTIONAL FILTER IMPLEMENTATION
// Small, single-responsibility, composable, reusable functions.
let isDog = (animal) => {return animal.species === 'dog'}
let dogs2 = animals.filter(isDog)
let notDogs2 = animals.reject(isDog)


console.log(dogs, dogs2, notDogs, notDogs2)
