let arr = [
  { name: 'Fluffykins', species: 'rabbit' },
  { name: 'Caro', species: 'dog' },
  { name: 'Hamilton', species: 'rabbit' },
  { name: 'Harold', species: 'dog' },
  { name: 'Ursula', species: 'dog' },
  { name: 'Jimmy', species: 'dog' }
]

// PROCEDURAL IMPLETMENTATION OF MAP
let res = []
for (let i = 0; i < arr.length; i++) res.push(arr[i].name)
console.log(res)

// FUNCTIONAL IMPLEMENTATION OF MAP
let res2 = arr.map(x => x.name)
console.log(res2)

// BUILDING AN ARRAY OF STRINGS WITH MAP
let res3 = arr.map(x => x.name + ' is a ' + x.species)
console.log(res3)
