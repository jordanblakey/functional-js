let animals = [
  { name: 'Fluffykins', species: 'rabbit' },
  { name: 'Caro', species: 'dog' },
  { name: 'Hamilton', species: 'rabbit' },
  { name: 'Harold', species: 'dog' },
  { name: 'Ursula', species: 'dog' },
  { name: 'Jimmy', species: 'dog' }
]

// PROCEDURAL IMPLETMENTATION OF MAP
let names = []
for (let i = 0; i < animals.length; i++) {
  // Build a list with only the name
  names.push(animals[i].name)
}

console.log(names)

// FUNCTIONAL IMPLEMENTATION OF MAP
let names2 = animals.map(animal => {
  return animal.name
})

console.log(names2)

// BUILDING A NEW LIST WITH MAP
let names3 = animals.map(animal => {
  return animal.name + ' is a ' + animal.species
})

console.log(names3)
