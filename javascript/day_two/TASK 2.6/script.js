var milkTemp = 20 

while(milkTemp <= 100) {
    milkTemp += Math.random()
    
}
console.log('while', milkTemp)

for(var milkTemp = 20; milkTemp <= 100; milkTemp += Math.random()) {}

console.log('for', milkTemp)

var milkTemp = 20 

while(true) {
    milkTemp += Math.random()
    if (milkTemp >= 100) {
        break;
    }
}
console.log('while with break', milkTemp)


