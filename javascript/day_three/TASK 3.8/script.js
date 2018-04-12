var myCar = {
    make: 'Opel',
    model: 'Corsa C',
    year: 2004,
    color: 'yellow'
}

function changeColor(car, newColor) {
    car.color = newColor // reference!!
}

changeColor(myCar, 'blue')

console.log(myCar)

