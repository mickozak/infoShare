function makeCat(name) {
    return {
        name: name,
        age: 1,
        sound: 'Meeeeow!',
        makeSound: function () {
            console.log(this.sound)
        },
        speak: function () {
            console.log('Sorry cats can’t speak')
        }
    }
}

var catNames = ['Puszek', 'Okruszek', 'Koteczek', 'Fluffy']

var cats = catNames.map(function (catName) {
    return makeCat(catName)
})

var catsArr = []

catNames.forEach(function (catName, index) {
    catsArr[index] = makeCat(catName)
})