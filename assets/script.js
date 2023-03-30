//triggering the quiz to start
var startButton = document.getElementById('start-btn')
startButton.addEventListener('click', startQuiz)
//Added so the home page will disappear and questions will appear in the function startQuiz
var homePage = document.getElementById('starter-page')
var questionContainer = document.getElementById('question-container')


function startQuiz () {
    console.log('Start')
    homePage.classList.add('hide'),
    console.log('clear')
    questionContainer.classList.remove('hide')
}

var question = document.getElementById('question-text')
var options = document.getElementById('option-container')
var answer = document.getElementById('answer-display')


var questionContainer = [
    {
        question:'What is contained in []?',
        options:['array','boolean', 'string','numbers'],
        answer:0
    },
    {
        question: 'A usful tool for debugging is:____.',
        options:['console.log','CSS','alerts','booleans'],
        answer:0
    },
    {
        question: 'Commolnly used data types DO NOT include____.',
        options:['alert','boolean','string','array'],
        answer:0
    },
]