function makeCat(name, sound) {
    return {
        name: name,
        sound: sound,
        makeSound: function () {
            console.log(this.sound)
        }
    }
}

var cats = [
    {name: 'Puszek', sound: 'Meeeeeeeooooooowwww'},
    {name: 'Okruszek', sound: 'Miau'},
    {name: 'Koteczek', sound: 'Meh'},
    {name: 'Fluffy', sound: 'Mrrrrrrrrr'}
]

var catObjects = cats.map(function (cat) {
    return makeCat(cat.name, cat.sound)
})