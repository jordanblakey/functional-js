'use strict';

var arr = [{ name: 'Fluffykins', species: 'rabbit' }, { name: 'Caro', species: 'dog' }, { name: 'Hamilton', species: 'rabbit' }, { name: 'Harold', species: 'dog' }, { name: 'Ursula', species: 'dog' }, { name: 'Jimmy', species: 'dog' }];

// PROCEDURAL IMPLETMENTATION OF MAP
var res = [];
for (var i = 0; i < arr.length; i++) {
  res.push(arr[i].name);
}console.log(res);

// FUNCTIONAL IMPLEMENTATION OF MAP
var res2 = arr.map(function (x) {
  return x.name;
});
console.log(res2);

// BUILDING AN ARRAY OF STRINGS WITH MAP
var res3 = arr.map(function (x) {
  return x.name + ' is a ' + x.species;
});
console.log(res3);