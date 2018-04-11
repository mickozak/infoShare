//Task 1

function question() {
    var answer = confirm('Do you want to answer the question?')
    if (answer == true){
        var answerTwo = prompt('What is your name?')
        if (answerTwo !== ""){
            alert('Hello ' + answerTwo + ' !');
        }
    }
}

question();

//Task 2

(function () {
    var answer = prompt("What page do you want to visit?");
    if (answer !==''){
        window.location = 'http://' + answer;
    }
})();
