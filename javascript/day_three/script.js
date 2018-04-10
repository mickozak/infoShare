//Task 1 - indexOf

var arrayNew = [1,2,3,4,5,6,7,8,9,10];

var nine = arrayNew.indexOf(10);

console.log(nine);

//Task 2

var variableString = "My name is Michal";

var secondWord = variableString.substr(3,5);

console.log(secondWord);

var aLetter = variableString.slice(4,5);

console.log(aLetter);

//Task 3

var myNewCar = new Object();

myNewCar.make='Toyota';
myNewCar.model='Corolla';
myNewCar.year=2006;

console.log(myNewCar);

//Task 4

var myNewCarTwo = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2006
}

console.log(myNewCarTwo);

//Task 5

function sum(a,b) {
    return a + b;

}

console.log(sum(2,7));

//Task 6

var counter=0;

function addTwo(a,b) {

    var sum = a + b;
    counter++;
    return sum;
}

addTwo();
addTwo();
addTwo();

console.log(counter);
