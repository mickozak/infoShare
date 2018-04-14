var random
var smallerThanHalf = 0;

for(var i = 0; i < 10; i++) {
    random = Math.random()
    console.log('random', i, ' = ', random)

    if (random < 0.5) { 
        smallerThanHalf++
    }
}


console.log('smallerThanHalf', smallerThanHalf)
