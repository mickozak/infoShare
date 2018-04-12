(function () {
    var div = document.querySelector('div')

    div.className = 'first'

    div.classList.add('second')
    div.classList.add('third')

    div.classList.remove('second')
})()
