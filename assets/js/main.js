
//# Play proceeds as follows:
// The user arrives at the landing page and is presented with a call-to-action to "Start Quiz." Also note the navigation option to "View Highscores" and the "Time" value set at 0.

// After the game ends, the user can save their initials and score to a highscores view using local storage.

// Add audio files to alert the user of correct or incorrect answers. Be sure to include the appropriate license.

// Customize the application theme.

// Create multiple quizzes and an option for users to choose between them.

// Add the application to your portfolio.

const startBtn = document.querySelector("#startBtn");
const startScreen = document.querySelector("#startScreen");
const gameScreen = document.querySelector("#gameScreen");
const endScreen = document.querySelector("#endScreen");
const choiceContainer = document.querySelector(".choice-container");
const wrongDiv = document.querySelector("#wrongDiv");
const correctDiv = document.querySelector("#correctDiv");
const finalScore = document.querySelector("#finalScore");
const hide = document.querySelector(".hide");


// set the time based on amount of questions to answer 
let time = questions.length * 15;
let timer = document.querySelector("#timer");
let interval = 0;

// question index 
let questionIndex = 0;

// setting the index of the questions array to a variable
let currentQuestion = questions[questionIndex];

// If a question is answered incorrectly, additional time is subtracted from the timer.
// The timer stops when all questions have been answered or the timer reaches 0.

// timer function immediately begins countdown when the start button is clicked. 
function countdownTimer() {

    // setting an interval of 1 second
    interval = setInterval(function() {

        // decrease time every second
        time--;

        // display the time in the timer span
        timer.textContent = time;

        // checks if time hits zero - if it does - clear the time
        if (time <= 0 || questions.length === 0){
            clearInterval(interval);
            endQuiz();
        }
    }, 1000);

}

// Clicking the start button displays a series of questions.

// function to get questions from the array
function getQuestions() {

    // sets the text of the object.title to an h2 
    const questionText = document.querySelector(".question-text");
    questionText.textContent = currentQuestion.title;

    // looping through the choices in the object
    currentQuestion.choices.forEach(function (choice) {

      // create new button for each choice
      const button = document.createElement("button");
      button.setAttribute("class", "btn btn-primary button-display");

      // add event listener to each button to see which button was clicked
      button.addEventListener("click", function (event) {
        event.preventDefault();

        // if the correct question is picked - display the class "correct"
        // else display the class "wrong" and penalize time
        if(event.target.textContent === currentQuestion.answer){
            correctDiv.setAttribute("class", "correct");
            questionIndex++
        } else {
            time -= 15;
            wrongDiv.setAttribute("class", "wrong");
            questionIndex++;
        }
      });

      // displays a number next to the possible answer based on the index
      // displays the choices for the question
      button.textContent = choice;

      // display on the page
      choiceContainer.appendChild(button);

    });
}

// The first view of the application displays a button that starts the quiz.
// Once the quiz begins, a timer starts.

// event listener for button click to start the quiz
startBtn.addEventListener("click", function(){

    // add a class of hide to the startScreen
    startScreen.classList.add("hide");

    // removes the class hide from the gameScreen
    gameScreen.classList.remove("hide");

    // call the timer on click
    countdownTimer();

    // get questions on click
    getQuestions();
    
});

function highScores() {

    // hide startScreen
    startScreen.classList.add("hide");

    // hide gameScreen
    gameScreen.classList.add("hide");
    
    // hide endScreen
    endScreen.classList.add("hide");

}

function endQuiz() {

    // hide questions screen
    gameScreen.classList.add("hide");

    // show end of quiz div
    endScreen.classList.remove("hide");

    // show final score
    finalScore.textContent = time;

}
// need to end quiz if user runs out of questions


// Score is calculated by time remaining. Answering quickly and correctly results in a higher score. Answering incorrectly results in a time penalty (for example, 15 seconds are subtracted from time remaining).


// When time runs out and/or all questions are answered, the user is presented with their final score and asked to enter their initials. Their final score and initials are then stored in localStorage.


// The length of the array in questions.js determines the length of play. Fifteen seconds per question is a good estimate, so 5 questions will result in a length of play of 75 seconds.



