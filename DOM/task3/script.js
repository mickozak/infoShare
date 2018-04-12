(function () {
    var div1 = document.getElementById('first')
    var div2 = document.getElementsByClassName('first-class')
    var div3 = document.getElementsByTagName('div')
    var div4 = document.querySelector('div#first.first-class')
    var div5 = document.querySelectorAll('div#first.first-class')

    console.log(div1, div2, div3, div4, div5)
})()