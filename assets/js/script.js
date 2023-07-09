var quizData = [
    {
        question: "What does HTML stand for?",
        choices: ["Hot Tomatoes Melt Lips", "HyperText Markup Language", "Hey Too Much Layout", "Hey! Thats My Lunch"],
        correctAnswer: 1
    },
    {
        question: "What does CSS stand for? (In coding)",
        choices: ["Counter Strike: Source", "Can't Stop Smiling", "Chicken Salad Sandwich", "Cascading Style Sheet"],
        correctAnswer: 3
    },
    {
        question: "HTML is the main source of webpage styling.",
        choices: ["True", "False"],
        correctAnswer: 1
    },
    {
        question: "What is the correct symbol for closing out an HTML tag?",
        choices: ["*", "$", "/", "!",],
        correctAnswer: 2
    },
    {
        question: "What does var mean in JavaScript?",
        choices: ["Variable", "Various", "Varsity", "Variant"],
        correctAnswer: 0
    },
];

var currentQuestion = 0;
var score = 0;
var totalTime = 60;
var timeRemaining = totalTime;

var questionElement = document.getElementById("questions");
var choicesElement = document.getElementById("choices");
var timerElement = document.getElementById("timer");
var startButton = document.getElementById("start-btn");
var submitButton = document.getElementById("submit-btn");
var initials = document.getElementById("initials");
var endBtn = document.getElementById("end-btn");



function startQuiz() {
    quizData.style.display = "none";
    startButton.style.display = "none";
}

function showQuestion() {
    var question = quizData[currentQuestion];
    questionElement.textContent = question.question;
    var timerInterval = setInterval(function () {
        totalTime--;
        timerElement.textContent = totalTime + " seconds remaining.";
    if (totalTime <= 0) {
        clearInterval(timerInterval);

         showResult();
    }
    }, 1000);



    choicesElement.innerHTML = "";
        for (var i = 0; i < question.choices.length; i++) {
             var choice = question.choices[i];
             var radioBtn = document.createElement("input");
             radioBtn.setAttribute("type", "radio");
             radioBtn.setAttribute("name", "choice");
             radioBtn.setAttribute("value", i);
             choicesElement.appendChild(radioBtn);

             var label = document.createElement("label");
             label.textContent = choice;
             choicesElement.appendChild(label);
             choicesElement.appendChild(document.createElement("br"));
        }
}

function checkAnswer() {
    var selectedChoice = document.querySelector('input[name="choice"]:checked');
    if (selectedChoice) {
        var userAnswer = parseInt(selectedChoice.value);
        var correctAnswer = quizData[currentQuestion].correctAnswer;
        if (userAnswer === correctAnswer) {
            score++;
        }
        currentQuestion++;

        if (currentQuestion < quizData.length) {
            showQuestion();
        } else {
            showResult();
        }
    }
}

function showResult() {
    questionElement.textContent = "Quiz Complete!";
    choicesElement.innerHTML = "You scored " + score + "/" + quizData.length;
    submitButton.style.display = "none";
    initials.style.display = "block";
}

startButton.addEventListener("click", () => {
    // questionElement.style.display = "block"
    startButton.style.display = "none";
    submitButton.style.display = "block";
    showQuestion();
});
submitButton.addEventListener("click", checkAnswer);
endBtn.addEventListener("click", () => {
    var finalScore = input.value + " " + score;
    localStorage.setItem("name + score", finalScore);
})

// startQuiz();
// showQuestion();