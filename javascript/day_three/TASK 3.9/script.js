var userName = localStorage.getItem('name')  
if (userName) {
    alert('Hello ' + userName)
}  else {
    localStorage.setItem('name', prompt('Type your name'))
}

