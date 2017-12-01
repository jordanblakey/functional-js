'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// NO SEMICOLON... NO DIFFERENCE TO AUTOMATIC COMMA INSERTION (ASI)
// function

function loadImg(url) {
  return new Promise(function (resolve, reject) {
    var image = new Image();
    image.onLoad = function () {
      resolve(image);
    };
    image.onError = function () {
      var msg = 'Could not load at ' + url;
      reject(new Error(msg));
    };
    image.src = url;
  });
}
exports.default = loadImage;


function addImg(src) {
  var imgElem = document.createElement('img');
  imgElem.src = src;
  document.body.appendChild(imgElem);
}

Promise.all([loadImg('images/cat1.png'), loadImg('images/cat2.png'), loadImg('images/cat3.png')]).then(function (images) {
  images.forEach(function (img) {
    return addImg(img.src);
  });
}).catch(function (error) {
  console.log(error);
});