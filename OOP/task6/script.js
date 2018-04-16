var cat1 = {
    name: 'Fluffy',
    age: 1,
    sound: 'Meeeeow!',
    makeSound: function () {
        console.log(this.sound)
    },
    speak: function () {
        console.log('Sorry cats can’t speak')
    }
}

cat1.makeSound()
cat1.speak()