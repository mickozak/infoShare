var arr = [1, 2, 6, 7, 1, 2, 3, 9, 2]

var indexOfFirstNine = arr.indexOf(9)

console.log(indexOfFirstNine)

var indexOfSecondNine = arr.indexOf(9, indexOfFirstNine+1)

console.log(indexOfSecondNine)

if (indexOfSecondNine === -1) {
    arr.push(9)
}

console.log(arr)