//Task 3

var one = 5;
var two = 10;
var name = 'michal';
var three = null;

console.log(one==two);
console.log(one===two);
console.log(one>two);
console.log(one<two);
console.log(name===one);
console.log(three<=two);

//Task 4

var five = 2;

if (five==1){
    console.log('Zmienna jest równa 1');
} else if (five=='1'){
    console.log('Zmienna jest równa "1"')
} else if (five==2){
    console.log('Zmienna jest równa 2')
} else {console.log('Zmienna jest różna od 1 i 2')}

//Task 5

switch(five){
    case 1:
        console.log('Zmienna jest równa 1');
        break;
    case 2:
        console.log('Zmienna jest równa 2');
        break
    default:
        console.log('Zmienna jest różna od 1 i 2');
}
