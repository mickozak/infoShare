(function () {
    fetch('https://randomuser.me/api/?results=5')
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            render(data.results)
        })

    function render(users) {
        users.forEach(function (user) {
            document.body.appendChild(makeUserDiv(user))
        })
    }

    function makeUserDiv(user) {
        var name = user.name.first
        var imgUrl = user.picture.thumbnail
        var email = user.email

        var div = document.createElement('div')
        var img = document.createElement('img')
        var emailP = document.createElement('p')
        var nameP = document.createElement('p')

        div.style.border = '1px solid black'
        img.setAttribute('src', imgUrl)
        nameP.innerText = name
        emailP.innerText = email

        div.appendChild(img)
        div.appendChild(nameP)
        div.appendChild(emailP)

        return div
    }
})()