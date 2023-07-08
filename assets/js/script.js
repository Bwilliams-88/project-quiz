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
        question: "HTML is the main source of webpage styling",
        choices: ["True", "False"],
        correctAnswer: 0
    },
    {
        question: "What is the correct symbol for closing out an HTML tag?",
        choics: ["*", "$", "/", "!",],
        correctAnswer: 2
    },
    {
        question: "What does var mean in JavaScript?",
        choices: ["Variable", "Various", "Varsity", "Variant"],
    },
];

var currentQuestion = 0;
var score = 0;

var questionElement = document.getElementById("questions");
var choicesElement = document.getElementById("choices");
var submitButton = document.getElementById("submit-btn");

function showQuestion() {
    var question = quizData[currentQuestion];
    questionElement.textContent = question.question;

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
        var userAnswer = parseInt(selectedChoices.value);
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
    choicesElement.innerHTML = "Your score is " + score + "/" + quizData.length;
    submitButton.style.display = "none";
}

submitButton.adddEventListener("click", checkAnswer);

showQuestion();