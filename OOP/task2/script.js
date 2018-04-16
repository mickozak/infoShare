function log() {
    console.log(this)
    console.log(arguments)
}

log() // window, Arguments []

log.call(this, 1, 'ala', 123) // window, Argument [1, 'ala', 123]

log.call({}, 1, 'ala', 123) // {}, Argument [1, 'ala', 123]

log.apply({}, [1, 'ala', 123]) // {}, Argument [1, 'ala', 123]

log.apply('Ala ma kota!', [1, 'ala', 123]) // {}, Argument [1, 'ala', 123]