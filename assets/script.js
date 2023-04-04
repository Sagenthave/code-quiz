

var home = document.getElementById('home')
var quiz = document.getElementById('container')
var startButton = document.getElementById('start')
var questions = document.getElementById('question-text');
var choice0 = document.getElementById('choice0');
var choice1 = document.getElementById('choice1');
var choice2 = document.getElementById('choice2');
var choice3 = document.getElementById('choice3');
var answer = document.getElementById('display-answer')

var i=0;
var score=0;

startButton.addEventListener('click', startQuiz);

let questionIndex = 0;
let currentQuestion;
let availableQuestion = [];
console.log(questionIndex)


function startQuiz () {
    console.log('start')
    home.style.display = 'none';
    quiz.style.display = "block";
    console.log('end')
    nextQuestion(), changeQuestion()
}

//Time Limt: Still need to create score page to default to
function nextQuestion () {
var timeEl = document.querySelector(".time");
var secondsLeft = 10;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      quiz.style.display = 'none';

    }

  }, 1000);
}
setTime()

}

function changeQuestion () {
    var questionArray = [
        {
            question:'What is not a data type?',
            choices: ['Alert','Boolean','Numbers','String',],
            answer: 'Alert'
        },
        {
            question:"What is contained in []?",
            choices: ['Array','Boolean','Alert','Number'],
            answer: 'array',
        },
        {
            question: 'What is the data type with answer true/false',
            choices: ['Boolean', 'Number', 'String', 'Javascript'],
            answer:'boolean',
        },
        {
            question:'Can an object be kept in an array?',
            choices: ['Yes', 'No', 'Sometimes', '' ],
            answer:'yes'
        }
    ]
    document.getElementById('question-text').innerHTML = 'Question: ' + questionArray[questionIndex].question
    document.getElementById('choice0').innerHTML ='1. ' + questionArray[questionIndex].choices[0]
    document.getElementById('choice1').innerHTML ='2. ' + questionArray[questionIndex].choices[1]
    document.getElementById('choice2').innerHTML = questionArray[questionIndex].choices[2]
    document.getElementById('choice3').innerHTML = questionArray[questionIndex].choices[3]
    console.log('working?')
    questionIndex++
console.log(questionIndex)

if (questionArray[0] === 'choice0') {
    answer === true
}

}
console.log(questionIndex)


document.getElementById('choice0').addEventListener('click', changeQuestion)
document.getElementById('choice1').addEventListener('click', changeQuestion)
document.getElementById('choice2').addEventListener('click', changeQuestion)
document.getElementById('choice3').addEventListener('click', changeQuestion)

// choices = document.getElementsByClassName('choice');
// if (choice0 || choice1 || choice2 || choice3) {
//     choices.addEventListener('click', nextQuestion)
// }










