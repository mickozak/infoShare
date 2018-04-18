function myOwnNew(constructorFunction, argumetsArray){
    // validation
    if(typeof constructorFunction !== 'function')
        throw new Error('constructor should be a function!')
    if(!Array.isArray(argumetsArray))
        throw new Error('argumets should be an array!')

    // points 1 & 2
    var newObject = Object.create(constructorFunction.prototype)

    // point 3
    constructorFunction.apply(newObject, argumetsArray)

    // point 4
    return newObject
}

function Cat(name, age){
    var privateVariable = 123

    this.getPrivateVariable = function(){
        return privateVariable
    }

    this.setPrivateVariable = function(newValue){
        privateVariable = newValue
    }

    this.name = name
    this.age = age
    this.sound = 'Meeeeow!'
}

Cat.prototype.makeSound = function(){
    console.log(this.sound)
}

Cat.prototype.speak = function(){
    console.log('Sorry cats can’t speak')
}

var cat1 = new Cat('Fluffy', 2)
var cat2 = new Cat('Puszek', 1)

var cat11 = myOwnNew(Cat, ['Fluffy', 2])
var cat22 = myOwnNew(Cat, ['Puszek', 1])