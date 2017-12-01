'use strict';

////////////////////////////////////////////////////////////////////////////////
// WORKING WITH THE CONSOLE IN JAVASCRIPT
////////////////////////////////////////////////////////////////////////////////

// DISPLAY A TABLE /////////////////////////////////////////////////////////////

// Single column
console.table(['apples', 'oranges', 'bananas']);

// 2d
console.table([['apples', 'oranges', 'bananas'], ['apples', 'oranges', 'bananas'], ['apples', 'oranges', 'bananas']]);

// STACK TRACE @ console.trace() ///////////////////////////////////////////////
function foo() {
  function bar() {
    console.trace();
  }
  bar();
}
foo();

// TIMER ///////////////////////////////////////////////////////////////////////
// label for timer, starts timer
console.time('now');
// return timer with elapsed milliseconds
console.timeEnd('now');

// LOG TYPES ///////////////////////////////////////////////////////////////////
console.log('Normal message');
console.info('Normal message');
console.warn('Warning labelled message');
console.error('Error labelled message');

// GROUPING ////////////////////////////////////////////////////////////////////
console.info('msg from level 0');
console.group('Group Name');
console.warn('msg from level 1');
console.groupCollapsed('Collapsed Group Name');
console.error('msg from level 2');
console.groupEnd();
console.groupEnd();
console.info('msg from level 0');

// COUNTING ////////////////////////////////////////////////////////////////////
var user = 'bob';
console.count(user); // bob: 1
console.count(user); // bob: 2
user = 'alice';
console.count(user); // alice: 1