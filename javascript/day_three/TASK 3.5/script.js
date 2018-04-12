// IIFE
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