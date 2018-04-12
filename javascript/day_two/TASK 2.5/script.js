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
