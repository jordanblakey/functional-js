// NO SEMICOLON... NO DIFFERENCE TO AUTOMATIC COMMA INSERTION (ASI)
// function

function loadImg(url) {
  return new Promise((resolve, reject) => {
    let image = new Image()
    image.onLoad = function() {
      resolve(image)
    }
    image.onError = function() {
      let msg = 'Could not load at ' + url
      reject(new Error(msg))
    }
    image.src = url
  })
}
export default loadImage

function addImg(src) {
  let imgElem = document.createElement('img')
  imgElem.src = src
  document.body.appendChild(imgElem)
}

Promise.all([
  loadImg('images/cat1.png'),
  loadImg('images/cat2.png'),
  loadImg('images/cat3.png')
])
  .then(images => {
    images.forEach(img => addImg(img.src))
  })
  .catch(error => {
    console.log(error)
  })
