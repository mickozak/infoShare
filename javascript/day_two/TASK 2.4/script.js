var value = 2 

var ternaryResult = value === 1
    ? 1 
    : value === '1'
        ? 2  
        :  value === 2
            ? 3 
            : 0  

console.log(ternaryResult)
