// thats how we can make own promises
// by using Promise constructor function

var promise1 = new Promise(function (resolve, reject) {
    // we can call resolve when we want to promise to be fulfilled
    resolve('ala ma kota')
})

// it logs 'ala ma kota'
// because promises are resolved with value
// passed as 1 argument of resolve method
// in promise constructor
promise1
    .then(console.log)

// we can use resolve in async actions!
var promise2 = new Promise(function (resolve, reject) {
    setTimeout(
        function () {
            resolve('ala ma kota')
        },
        5000
    )
})

// logs 'ala ma kota' after 5s
promise2
    .then(console.log)


function myFetch(url) {
    var promise = fetch(url)
        .then(function (response) {
            return response.json()
        })
        .catch(function (error) {
            console.log('Nie wyszło :(', error)
        })

    return promise
}