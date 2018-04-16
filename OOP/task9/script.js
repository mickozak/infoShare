var cat = {
    sound: 'Meoooow!',
    makeSound: function () {
        console.log(this)
        console.log(this.sound)
    }
}

// setInterval(
//     // this function will be executed in other context than cat!!!
//     cat.makeSound
//     ,
//     1000
// )

// setInterval(
//     cat.makeSound.bind(cat)
//     ,
//     1000
// )

var boundMakeSound = cat.makeSound.bind(cat)

setInterval(
    boundMakeSound
    ,
    1000
)