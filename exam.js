// Questions array
const questions = [
  {
    question: "What does RCMP stand for?",
    answers: [
      "Royal Canadian Mounted Police",
      "Regional Court Military Police",
      "Royal Crime Management Patrol",
      "None"
    ]
  },
  {
    question: "What is a warrant?",
    answers: [
      "A legal authorization",
      "A police badge",
      "A uniform",
      "A courthouse"
    ]
  }
];

let current = 0;      // current question
let selectedAnswer = null; 

function loadQuestion() {
  selectedAnswer = null;
  document.getElementById("nextBtn").disabled = true;

  const q = questions[current];
  document.getElementById("question").innerText = q.question;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.innerText = answer;
    btn.className = "answer-btn";
    btn.onclick = () => selectAnswer(btn);
    answersDiv.appendChild(btn);
    answersDiv.appendChild(document.createElement("br"));
    answersDiv.appendChild(document.createElement("br"));
  });
}

function selectAnswer(button) {
  // Remove highlight from all buttons
  document.querySelectorAll(".answer-btn").forEach(btn => btn.classList.remove("selected"));

  // Highlight clicked button
  button.classList.add("selected");
  selectedAnswer = button.innerText;

  // Enable Next button
  document.getElementById("nextBtn").disabled = false;
}

function nextQuestion() {
  current++;
  if (current < questions.length) {
    loadQuestion();
  } else {
    alert("Exam finished!");
    // Here you can redirect to results.html if you have one
  }
}

// Load first question
loadQuestion();
