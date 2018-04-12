var userName = localStorage.getItem('name')  // get user name from storage

if (userName) {
    alert('Hello ' + userName)
}  else {
    localStorage.setItem('name', prompt('Type your name'))
}

