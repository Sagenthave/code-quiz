//triggering the quiz to start
var startButton = document.getElementById('start-btn');
startButton.addEventListener('click', startQuiz);
//Added so the home page will disappear and questions will appear in the function startQuiz
var homePage = document.getElementById('starter-page');
var questionContainer = document.getElementById('question-container');
var choices = Array.from(document.getElementsByClassName("option-text"));
console.log(choices)

var chosenQuestion= {};
var correctAnswers= true; 
var score=0
var questionCounter=0;
var availableQuestions = [];

var optionOne = document.getElementById("option1")

var questionArray = [
    {
        question: 'What is contained in []?',
        options: ['array','boolean', 'string','numbers'],
        correctAnswer: 0
    },
    {
        question: 'A usful tool for debugging is:____?',
        options: ['console.log','CSS','alerts','booleans'],
        correctAnswer: 0
    },
    {
        question: 'Commolnly used data type?',
        options: ['alert','boolean','style','array'],
        correctAnswer: 0
    },
    {
        question:'What data type is "23"?',
        options: ['string','numbers','boolean','array'],
        correctanswer: 0
    }
]

function startQuiz () {
    homePage.style.display = "none";
    questionContainer.style.display = "block";
    questionCounter=0;
    score=0;
    availableQuestions = [...questionArray]
    console.log(availableQuestions)
    for (i=0; i<availableQuestions.length; i++)
    getNextQuestions()
}

function getNextQuestions () {
    questionCounter++;
}


function selectAnswer() {

}

