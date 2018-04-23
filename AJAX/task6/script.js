var fetchThreeUsers = Promise.all([
    fetch('https://randomuser.me/api').then(function (response) {
        return response.json()
    }),
    fetch('https://randomuser.me/api').then(function (response) {
        return response.json()
    }),
    fetch('https://randomuser.me/api').then(function (response) {
        return response.json()
    })
])

function displayUsers(u1, u2, u3) {
    console.log('user 1: ', u1)
    console.log('user 2: ', u2)
    console.log('user 3: ', u3)
}

fetchThreeUsers
    .then(function (responses) {
        displayUsers(
            responses[0],
            responses[1],
            responses[2]
        )
    })
