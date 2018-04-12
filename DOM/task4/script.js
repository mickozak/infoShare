(function () {
    var bodyElement = document.querySelector('body')
    var div1 = document.createElement('div')
    var div2 = document.createElement('div')
    var text = document.createTextNode('Hello!')

    div2.appendChild(text)
    div1.appendChild(div2)
    bodyElement.appendChild(div1)
})()

;(function (content) {
    document.querySelector('body')
        .innerHTML = '<div><div>'+content+'</div></div>'
})('ala mma kota')