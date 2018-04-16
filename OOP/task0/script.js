console.log(this) // window

function logThis() {
    console.log(this)
}

logThis() // window

var obj1 = {}
obj1.logThis = logThis

var obj2 = {
    logThis: logThis
}

obj1.logThis() // obj1
obj2.logThis() // obj2