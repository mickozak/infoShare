//Task 1

var str = 'Ala ma kota, kot ma Ale'

var indexOfFirstSpace = str.indexOf(' ')
var indexOfSecondSpace = str.indexOf(' ', indexOfFirstSpace + 1)

var secondWord = str.slice(indexOfFirstSpace + 1, indexOfSecondSpace)

console.log(secondWord)
console.log('second word contains "a"?', secondWord.indexOf('a') !== -1)

//Task 2

var myCar = new Object() // empty object

myCar.make = 'Opel'
myCar.model = 'Corsa C'
myCar.year = 2004
myCar.color = 'yellow'

//Task 3

function add(a, b) {
    return a + b;
}

console.log(add(1, 2))
console.log(add(4, 6))

//Task 4

var myNewCarTwo = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2006
}

console.log(myNewCarTwo);

//Task 5

function sum(a,b) {
    return a + b;

}

console.log(sum(2,7));

//Task 6

var counter = 0

function add(a, b) {
    counter++

    return a + b
}

add(1,2)
add(1,2)
add(1,2)
add(1,2)

console.log(counter)

//Task 7

(function() {

    // from TASK 3.4
    var counter = 0

    function add(a, b) {
        counter++

        return a + b
    }

    add(1,2)
    add(1,2)
    add(1,2)
    add(1,2)

    console.log(counter)


})()

console.log(counter)

//Task8

var array = [1, 2 ,3, 4, 5]

function arrSum(arr, index) {
    var lastIndex = arr.length - 1

    if (index == lastIndex) {
        return arr[index]
    }

    return arr[index] + arrSum(arr, index + 1)
}

var sum = arrSum(array, 0) // start loop from index 0

console.log('arr sum', sum)

//Task 9

ar array = [1, 2 ,3, 4, 5]

function arrLoop(arr, index) {
    console.log(arr[index])

    var lastIndex = arr.length - 1

    if (index < lastIndex) {
        arrLoop(arr, index + 1)
    }
}

arrLoop(array, 0)

//Task 10

var myCarNewSecond = {
    make: "Audi",
    model: "RS7",
    color: "red"
}

function changeColor(car) {
    car.color = "blue"
}


changeColor(myCarNewSecond);
console.log(myCarNewSecond);
