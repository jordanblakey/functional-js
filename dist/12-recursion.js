'use strict';

var countDownFrom = function countDownFrom(num) {
  if (num === 0) return;
  console.log(num);
  countDownFrom(num - 1);
};
// Tail call optimization
countDownFrom(10);

var categories = [{ id: 'animals', parent: null }, { id: 'mammals', parent: 'animals' }, { id: 'cats', parent: 'mammals' }, { id: 'dogs', parent: 'mammals' }, { id: 'chihuahua', parent: 'dogs' }, { id: 'labrador', parent: 'dogs' }, { id: 'persian', parent: 'cats' }, { id: 'siamese', parent: 'cats' }];

var makeTree = function makeTree(categ, parent) {
  var node = {};
  categ.filter(function (c) {
    return c.parent === parent;
  }).forEach(function (c) {
    node[c.id] = makeTree(categ, c.id);
  });
  return node;
};

console.log(JSON.stringify(makeTree(categories, null), null, 2));