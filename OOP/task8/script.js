function returnX () {
    console.log(this.x, arguments)
}

var obj = { x: 42 }

// undefined - in global scope this points at window and there is no x prop!
returnX.call(this, 1, 2, 3)

// 42 - in obj objects there is x prop
returnX.call(obj, 1, 2, 3)

// undefined - in global scope this points at window and there is no x prop!
returnX.apply(this, [1, 2, 3])

// 42 - in obj objects there is x prop
returnX.apply(obj, [1, 2, 3])
