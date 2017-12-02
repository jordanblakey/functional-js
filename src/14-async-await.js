const fetch = require('node-fetch')

function fetchAvatarUrl(userId) {
  return fetch(`https://catappapi.herokuapp.com/users/${userId}`)
    .then(response => response.json())
    .then(data => data.imageUrl)
}

const result = fetchAvatarUrl(123)
console.log('Promise: ', result) // returns a promise

////////////////////////////////////////////////////////////////////////////////
// [ASYNC AWAIT] The goal of is to write sync code that flows like async code

async function fetchAvatarUrlAsync(userId) {
  const response = await fetch(
    `https://catappapi.herokuapp.com/users/${userId}`
  )
  const data = await response.json()
  response
  data
  return data.imageUrl
}

const resultAsync = fetchAvatarUrlAsync(123)
resultAsync

////////////////////////////////////////////////////////////////////////////////
// [PROMISES] Chain them to operate on API provided data
function fetchCatAvatars(userId) {
  return fetch(`https://catappapi.herokuapp.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {
      const promises = user.cats.map(catId =>
        fetch(`https://catappapi.herokuapp.com/cats/${catId}`)
          .then(response => response.json())
          .then(catData => catData.imageUrl)
      )
      return Promise.all(promises)
    })
}
const resultCatAvatars = fetchCatAvatars(123)
resultCatAvatars

////////////////////////////////////////////////////////////////////////////////
// [AYSNC AWAIT]
async function asyncCatAvatars(userId) {
  // Define an async function
  const response = await fetch(
    // assign the asyc fetch of a userId
    `https://catappapi.herokuapp.com/users/${userId}`
  )
  const user = await response.json() // because we're waiting on the result of fetch, use await here too
  user // show the result of the fetch
  const catImageUrls = []
  for (const catId of user.cats) {
    // loop through an array in the response json we assigned to user
    const response2 = await fetch(
      // new call to fetch to get the 'cats' data from the user json array 'cat'
      //
      `https://catappapi.herokuapp.com/cats/${catId}`
    )
    const catData = await response2.json()
    // notice that we're using async every time we're still in a 'then block'
    // You can think of it as escaping a promise
    catData
    catImageUrls.push(catData.imageUrl)
  }
  return catImageUrls
}

console.log(asyncCatAvatars(123))
