//Task 1

var personAge = 17;

var audi = {}
var opel = {}


console.log('personAge >= 18?', personAge >= 18)
console.log('personAge === 17?', personAge === 17)
console.log('audi === audi?', audi === audi)
console.log('audi !== opel?', audi === opel)
console.log('NaN == NaN', NaN == NaN)
console.log('is NaN', Number.isNaN(NaN))
console.log('[] === []', [] === [])

//Task 2

var falsyValue = null
var result = falsyValue || 1

console.log('result', result)

//Task 3

var arr = [1, 2, 6, 7, 1, 2, 3, 9, 2]
var indexOfFirstNine = arr.indexOf(9)

console.log(indexOfFirstNine)

var indexOfSecondNine = arr.indexOf(9, indexOfFirstNine+1)

console.log(indexOfSecondNine)

if (indexOfSecondNine === -1) {
    arr.push(9)
}

console.log(arr)

//Task 4

var value = 5 // variable to check

if (value === 1) {
    console.log(1)
} else if (value === '1') {
    console.log(2)
} else if (value === 2) {
    console.log(3)
} else {
    console.log(0)
}

//Task 5

var value = 1 // variable to check

switch(value) {
    case 1:
        console.log(1)
        break;

    case '1':
        console.log(2)
        break;

    case 2:
        console.log(3)
        break
    default:
        console.log(0)
}

//Task 6

var value = 2 

var ternaryResult = value === 1
    ? 1 
    : value === '1'
        ? 2  
        :  value === 2
            ? 3 
            : 0  

console.log(ternaryResult)

//Task 7

var random
var smallerThanHalf = 0;

for(var i = 0; i < 10; i++) {
    random = Math.random() // generate random number and assign to "random" variable
    console.log('random', i, ' = ', random)

    if (random < 0.5) { // increase smallerThanHalf variable if random is smaller than 0.5
        smallerThanHalf++
    }
}

console.log('smallerThanHalf', smallerThanHalf)

//Task 8

var milkTemp = 20 // init milk temperature

while(milkTemp <= 100) {
    milkTemp += Math.random()
    // alternative: milkTemp = milkTemp + Math.random()
}
console.log('while', milkTemp)

// for:
for(var milkTemp = 20; milkTemp <= 100; milkTemp += Math.random()) {}

console.log('for', milkTemp)

// while with break
var milkTemp = 20 // init milk temperature

while(true) {
    milkTemp += Math.random()
    if (milkTemp >= 100) {
        break;
    }
}
console.log('while with break', milkTemp)

//Task 9

var arr = [] // empty array

for(var i = 0; i < 100; i++) {
    arr[i] = Math.random() // assign random value to arr
}

console.log(arr);

//Task 10

var arr = [1,2,3,4,5]

arr.unshift(0) // add 0 as first element
arr.push(6) // add 6 to the end of array

console.log(arr)

arr.shift() // remove first element
arr.pop() // remove last element

console.log(arr)

//Task 11


var evenRandomNumber = 6+Math.ceil((Math.random()*10))*2

var arr = [] // empty array

for(var i = 0; i < evenRandomNumber; i++) {
    arr[i] = Math.random()
}

var middleOfArray = evenRandomNumber / 2
var startFrom = middleOfArray - 2
var end = middleOfArray + 2

var newArr = arr.slice(startFrom, end)

console.log(arr)
console.log(newArr)
