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




