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

//Task 7

(function addThree(a,b,c) {
    var counter;
    counter=0;
    var sum = a + b + c;
    counter++;
    console.log(counter);
    return sum;
})(4,5,1)

//Task8

var arr = [1,2,3,4,5];

function loop(arr, index) {
    console.log(arr[index])

    var lastIndex = arr.length-1; //zmienna pomocnicza

    if (index === lastIndex){ //jesli index jest ostatnim elelemnetem to stopujemy
        return;
    }

    loop(arr, index+1) // w innym przypadku wywołujemy dalej tą funkcje

}

loop(arr, 0)

//Task 9

var myCarNewSecond = {
    make: "Audi",
    model: "RS7",
    color: "red"
}

function changeColor(car) {
    car.color = "blue"
}


changeColor(myCarNewSecond);
console.log(myCarNewSecond);
