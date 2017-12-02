'use strict';

var fs = require('fs');

var stupidNumberStream = {
  each: function each(callback) {
    setTimeout(function () {
      callback(1);
    }, 1000);
    setTimeout(function () {
      callback(2);
    }, 2000);
    setTimeout(function () {
      callback(3);
    }, 3000);
  }
};

stupidNumberStream.each(console.log);