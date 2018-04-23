(function () {

    var button = document.querySelector('button')
    button.addEventListener('click', function () {
        var dataPromise = fetchData()

        dataPromise
            .then(function (data) {
                showUserName(data.results[0])
            })
    })

    function fetchData(){
        var promise = fetch('https://randomuser.me/api/')
            .then(function (response) {
                return response.json()
            })

        return promise
    }

    function showUserName(user) {
        var div = document.querySelector('div')
        div.innerText =
            firstLetterUppercase(user.name.first) +
            ' ' +
            firstLetterUppercase(user.name.last)
    }

    function firstLetterUppercase(str) {
        return str
            .split('')
            .map(function (letter, i) {
                return i ? letter : letter.toUpperCase()
            })
            .join('')
    }

})()