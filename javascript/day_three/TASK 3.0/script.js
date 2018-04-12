var str = 'Ala ma kota, kot ma Ale'

var indexOfFirstSpace = str.indexOf(' ')
var indexOfSecondSpace = str.indexOf(' ', indexOfFirstSpace + 1)

var secondWord = str.slice(indexOfFirstSpace + 1, indexOfSecondSpace)

console.log(secondWord)
console.log('second word contains "a"?', secondWord.indexOf('a') !== -1)