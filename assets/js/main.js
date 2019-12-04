
//# Play proceeds as follows:
// The user arrives at the landing page and is presented with a call-to-action to "Start Quiz." Also note the navigation option to "View Highscores" and the "Time" value set at 0.

const startBtn = document.querySelector("#startBtn");
const startScreen = document.querySelector("#startScreen");
const gameScreen = document.querySelector("#gameScreen");
const hide = document.querySelector(".hide");


// set the time based on amount of questions to answer 
let time = questions.length * 15;
let timer = document.querySelector("#timer");
let interval = 0;

// timer function immediately begins countdown when the start button is clicked. 
function countdownTimer() {
    interval = setInterval(function() {
        time--;
        timer.textContent = time;

    }, 1000);

    if (time <= 0){
        endQuiz();
    }
}

// event listener for button click to start the quiz
startBtn.addEventListener("click", function(){
    startScreen.setAttribute("class", "hide");
    gameScreen.classList.remove("hide");

    countdownTimer();
    getQuestions();
});

function getQuestions() {
    let questionIndex = 0;
    let currentQuestion = questions[questionIndex];

    const choiceText = document.querySelector(".question-text");
    choiceText.textContent = currentQuestion.title;
}

function endQuiz(){
    clearInterval(interval);
}

// Score is calculated by time remaining. Answering quickly and correctly results in a higher score. Answering incorrectly results in a time penalty (for example, 15 seconds are subtracted from time remaining).


// When time runs out and/or all questions are answered, the user is presented with their final score and asked to enter their initials. Their final score and initials are then stored in localStorage.


// The length of the array in questions.js determines the length of play. Fifteen seconds per question is a good estimate, so 5 questions will result in a length of play of 75 seconds.


// The first view of the application displays a button that starts the quiz.


// Clicking the start button displays a series of questions.


// Once the quiz begins, a timer starts.


// If a question is answered incorrectly, additional time is subtracted from the timer.


// The timer stops when all questions have been answered or the timer reaches 0.


// After the game ends, the user can save their initials and score to a highscores view using local storage.

// Add audio files to alert the user of correct or incorrect answers. Be sure to include the appropriate license.


// Customize the application theme.


// Create multiple quizzes and an option for users to choose between them.


// Add the application to your portfolio.