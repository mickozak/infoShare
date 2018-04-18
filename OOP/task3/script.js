// normal object
var base = {
    baseProperty: function(){
        console.log('I’m from prototype!')
    }
}

var newObject = Object.create(base)

// works because baseProperty is a function from prototype!
// you can find it in __proto__ property in console
newObject.baseProperty()

base.name = 'Fluffy'

// returns 'Fluffy' because we modified prototype before
// and as all object prototype is passed by reference!
newObject.name

newObject.name = 'Ala'

// returns 'Ala'
newObject.name

newObject.makeSound = function () {
    console.log('Miauu!')
}

var theNewestObject = Object.create(newObject)