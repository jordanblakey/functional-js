'use strict';

var $ = require('jquery');

var greetMe = function greetMe() {
  var me = 'Bruce Wayne';
  console.log('Hello, ' + me + '!');
};
greetMe();

var you = 'Dick Grayson';
var greetYou = function greetYou() {
  console.log('Hello, ' + you + '!');
};
you = 'Robin';
greetYou();

// In a language without closure, the variable me would have been garbage
// collected and thrown away when the function outer exited.
//Calling fnc would have thrown an error because a no longer exists.

// In JavaScript, the variable me persists because variable scope is created
//when the function is first declared, and persists for as long as the
//function continues to exist.

// const sendRequest = () => {
//   let requestID = '123'
//   $.ajax({
//     url: '/myUrl',
//     success: function(response) {
//       alert('Request ' + requestID + ' returned')
//     }
//   })
// }
// sendRequest()