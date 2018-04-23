document.querySelector('.loading').innerText = 'loading'

// timeout is only for slowing process down
setTimeout(function () {
    var promise = fetch('https://randomuser.me/api')
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            document.querySelector('.data').innerText = data.results[0].name.first
            document.querySelector('.loading').innerText = ''
        })
}, 2000)
