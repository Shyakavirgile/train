const questionElement = document.getElementById("question");
const labels = [document.getElementById("label1"), document.getElementById("label2"), document.getElementById("label3"), document.getElementById("label4")];
const submitButton = document.getElementById("submit-btn");
const resultElement = document.getElementById("result");
const correctCountElement = document.getElementById("correct-count");
const incorrectCountElement = document.getElementById("incorrect-count");

const questions = [
    {
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Madrid", "Paris"],
        correctAnswer: 3
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correctAnswer: 1
    },
    // Add more questions here
];

let currentQuestionIndex = -1;
let correctCount = 0;
let incorrectCount = 0;

function loadQuestion() {
    currentQuestionIndex = Math.floor(Math.random() * questions.length);
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    for (let i = 0; i < 4; i++) {
        labels[i].textContent = currentQuestion.options[i];
    }
}

function checkAnswer() {
    const selectedOption = document.querySelector("input[name='answer']:checked");
    if (!selectedOption) {
        resultElement.textContent = "Please select an answer.";
        return;
    }
    
    const selectedAnswer = parseInt(selectedOption.id.slice(-1));
    const currentQuestion = questions[currentQuestionIndex];
    
    if (selectedAnswer === currentQuestion.correctAnswer) {
        resultElement.textContent = "Correct!";
        correctCount++;
        correctCountElement.textContent = correctCount;
    } else {
        resultElement.textContent = "Incorrect. The correct answer was: " + currentQuestion.options[currentQuestion.correctAnswer];
        incorrectCount++;
        incorrectCountElement.textContent = incorrectCount;
    }
    
    selectedOption.checked = false;
    submitButton.disabled = true;
}

submitButton.addEventListener("click", checkAnswer);
submitButton.addEventListener("mouseenter", () => {
    submitButton.disabled = false;
});

loadQuestion();
