var array = [1, 2 ,3, 4, 5]

function arrLoop(arr, index) {
    console.log(arr[index])

    var lastIndex = arr.length - 1

    if (index < lastIndex) {
        arrLoop(arr, index + 1)
    }
}

arrLoop(array, 0) // start loop from index 0