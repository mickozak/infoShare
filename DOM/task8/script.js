function addElement(container, content, tag) {
    container = container || document.querySelector('body')
    content = content === undefined ? 'Ala ma kota' : content
    tag = tag || 'div'

    var newDiv = document.createElement(tag)
    var textNode = document.createTextNode(content)

    newDiv.appendChild(textNode)

    container.appendChild(newDiv)
}