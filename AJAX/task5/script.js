var promise = new Promise(function (resolve, reject) {
    fetch('https://randomuser.mme/api')
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            resolve(data)
        })
        .catch(function (error) {
            reject(error)
        })
})

promise
    .then(console.log)
    .catch(console.log)