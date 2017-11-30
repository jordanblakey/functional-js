'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDog = undefined;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var animals = [{ name: 'Fluffykins', species: 'rabbit' }, { name: 'Caro', species: 'dog' }, { name: 'Hamilton', species: 'rabbit' }, { name: 'Harold', species: 'dog' }, { name: 'Ursula', species: 'dog' }, { name: 'Jimmy', species: 'dog' }];

// FILTER USING IMPERATIVE METHOD
// More logic, harder ro reason about, less readable, doesn't scale well.
var dogs = [];
for (var i = 0; i < animals.length; i++) {
  if (animals[i].species === 'dog') dogs.push(animals[i]);
}
var notDogs = [];
for (var _i = 0; _i < animals.length; _i++) {
  if (animals[_i].species !== 'dog') dogs.push(animals[_i]);
}

// FILTER USING FUNCTIONAL METHOD
// Small, single-responsibility, composable, reusable functions.
var isDog = exports.isDog = function isDog(animal) {
  return animal.species === 'dog';
};
var dogs2 = animals.filter(isDog);
var notDogs2 = animals.filter(function (e) {
  return !isDog(e);
});

// USING LODASH INSTEAD
var dogs3 = _lodash2.default.filter(animals, ['species', 'dog']);
var notDogs3 = _lodash2.default.reject(animals, ['species', 'dog']);

// NOTE THAT ARROW FUNCTIONS AREN'T MORE TERSE
function a(x) {
  console.log(x);
}
a('x');

var b = function b(y) {
  console.log(y);
};
b('y');

console.log(dogs, notDogs, dogs2, notDogs2, dogs3, notDogs3);