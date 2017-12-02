const fetch = require('node-fetch')

async function fetchCatAvatars(userId) {
  const response = await fetch(
    `https://catappapi.herokuapp.com/users/${userId}`
  )
  const user = await response.json()
  user
}
const result = fetchCatAvatars(123)
result
