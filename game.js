// Marrja e pyetjeve
var questionOne = document.getElementById("question-1");
var questionTwo = document.getElementById("question-2");
var questionThree = document.getElementById("question-3");
var questionFour = document.getElementById("question-4");

// Marrja e pergjigjeve
var firstChoiceOne = document.getElementById("first-choice-1");
var firstChoiceTwo = document.getElementById("first-choice-2");
var firstChoiceThree = document.getElementById("first-choice-3");
var firstChoiceFour = document.getElementById("first-choice-4");

var secondChoiceOne = document.getElementById("second-choice-1");
var secondChoiceTwo = document.getElementById("second-choice-2");
var secondChoiceThree = document.getElementById("second-choice-3");
var secondChoiceFour = document.getElementById("second-choice-4");

// var thirdChoiceOne = document.getElementById("third-choice-1");
// var thirdChoiceTwo = document.getElementById("third-choice-2");
// var thirdChoiceThree = document.getElementById("third-choice-3");
// var thirdChoiceFour = document.getElementById("third-choice-4");


// var fourthChoiceOne = document.getElementById("fourth-choice-1");
// var fourthChoiceOne = document.getElementById("fourth-choice-2");
// var fourthChoiceThree = document.getElementById("fourth-choice-3");
// var fourthChoiceFour = document.getElementById("fourth-choice-4");


// var fifthChoiceOne = document.getElementById("fifth-choice-1");
// var fifthChoiceOne = document.getElementById("fifth-choice-2");
// var fifthChoiceThree = document.getElementById("fifth-choice-3");
// var fifthChoiceFour = document.getElementById("fifth-choice-4");


// var sixthChoiceOne = document.getElementById("sixth-choice-1");
// var sixthChoiceOne = document.getElementById("sixth-choice-2");
// var sixthChoiceThree = document.getElementById("sixth-choice-3");
// var sixthChoiceFour = document.getElementById("sixth-choice-4");


// var seventhChoiceOne = document.getElementById("seventh-choice-1");
// var seventhChoiceOne = document.getElementById("seventh-choice-1");
// var seventhChoiceThree = document.getElementById("seventh-choice-1");
// var seventhChoiceFour = document.getElementById("seventh-choice-1");


// var eighthChoiceOne = document.getElementById("eighth-choice-1");
// var eighthChoiceOne = document.getElementById("eighth-choice-1");
// var eighthChoiceThree = document.getElementById("eighth-choice-1");
// var eighthChoiceFour = document.getElementById("eighth-choice-1");


// var ninethChoiceOne = document.getElementById("nine-choice-1");
// var ninethChoiceOne = document.getElementById("nine-choice-1");
// var ninethChoiceThree = document.getElementById("nine-choice-1");
// var ninethChoiceFour = document.getElementById("nine-choice-1");

// var tenthChoiceOne = document.getElementById("tenth-choice-1");
// var tenthChoiceOne = document.getElementById("tenth-choice-2");
// var tenthChoiceThree = document.getElementById("tenth-choice-3");
// var tenthChoiceFour = document.getElementById("tenth-choice-4");

// var eleventhChoiceOne = document.getElementById("eleventh-choice-1");
// var eleventhChoiceTwo = document.getElementById("eleventh-choice-2");
// var eleventhChoiceThree = document.getElementById("eleventh-choice-3");
// var eleventhChoiceFour = document.getElementById("eleventh-choice-4");


// var twelfthChoiceOne = document.getElementById("twelfth-choice-1");
// var twelfthChoiceTwo = document.getElementById("twelfth-choice-2");
// var twelfthChoiceThree = document.getElementById("twelfth-choice-3");
// var twelfthChoiceFour = document.getElementById("twelfth-choice-4");

// var thirteenthChoiceOne = document.getElementById("thirteenth-choice-1");
// var thirteenthChoiceTwo = document.getElementById("thirteenth-choice-2");
// var thirteenthChoiceThree = document.getElementById("thirteenth-choice-3");
// var thirteenthChoiceFour = document.getElementById("thirteenth-choice-4");

// var fourteenthChoiceOne = document.getElementById("fourteenth-choice-1");
// var fourteenthChoiceTwo = document.getElementById("fourteenth-choice-2");
// var fourteenthChoiceThree = document.getElementById("fourteenth-choice-3");
// var fourteenthChoiceFour = document.getElementById("fourteenth-choice-4");

// var fifteenthChoiceOne = document.getElementById("fifteenth-choice-1");
// var fifteenthChoiceTwo = document.getElementById("fifteenth-choice-2");
// var fifteenthChoiceThree = document.getElementById("fifteenth-choice-3");
// var fifteenthChoiceFour = document.getElementById("fifteenth-choice-4");

var pointsArray = [];
var sum = 0;

function addPoints(id) {
    var button = document.getElementById(id);
    pointsArray.push(parseInt(button.dataset.points));
    console.log(pointsArray);
}

function sumPoints() {
    for (var i = 0; i < pointsArray.length; i++) {
        sum += pointsArray[i];
    }

    var pointsDisplay = document.createElement("h2");
    var text = document.createTextNode("Ti ke: " + sum + " pike.");
    pointsDisplay.appendChild(text);
    var position = document.getElementById("displayPoints");
    position.appendChild(pointsDisplay);

    document.getElementById("endButton").disabled = true;
}


function disableButtons(question) {
    var buttons = document.querySelectorAll(`button[id^=${question}]`);
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }
}

console.log(document.querySelectorAll('button[id^="first"]'));

console.log(sum);

document.addEventListener('submit', function(event) {
    event.preventDefault();
});