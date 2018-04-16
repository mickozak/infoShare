function makeSound() {
    console.log(this.sound)
}

var cat1 = {
    name: "Fluffy",
    sound: "Meow!",
    makeSound: makeSound
}

var cat2 = {
    name: "Fluffys",
    sound: "Meooooooooow!",
    makeSound: makeSound
}

cat1.makeSound() // "Meow!"
cat2.makeSound() // "Meooooooooow!"