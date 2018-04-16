function logThis() {
    console.log(this)
}

var cat = {
    name: 'Fluffy'
}

cat.logThis = logThis.bind(cat)
var globalLogThisFromCat = cat.logThis

cat.logThis() // cat
globalLogThisFromCat() // cat
logThis() // window