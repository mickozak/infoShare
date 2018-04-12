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


