(function () {
    var inputElement = document.querySelector('input')

    inputElement.setAttribute('disabled', '')

    inputElement.setAttribute('name', 'email')
})()

function toggleDisabled(){
    var inputElement = document.querySelector('input')

    if(inputElement.getAttribute('disabled') === null)
        inputElement.setAttribute('disabled', '')
    else
        inputElement.removeAttribute('disabled')
}