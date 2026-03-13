let current = 0;
let selectedAnswer = null;
let score = 0;

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
    btn.onclick = () => selectAnswer(btn, answer, q.correct);
    answersDiv.appendChild(btn);
    answersDiv.appendChild(document.createElement("br"));
    answersDiv.appendChild(document.createElement("br"));
  });
}

function selectAnswer(button, answer, correctIndex) {
  document.querySelectorAll(".answer-btn").forEach(btn => btn.classList.remove("selected"));
  button.classList.add("selected");
  selectedAnswer = answer;

  // Enable Next button
  document.getElementById("nextBtn").disabled = false;

  // Add 1 point if correct
  if (questions[current].answers.indexOf(answer) === correctIndex) {
    score++;
  }
}

function nextQuestion() {
  current++;
  if (current < questions.length) {
    loadQuestion();
  } else {
    localStorage.setItem("score", score);
    localStorage.setItem("totalQuestions", questions.length);
    window.location.href = "results.html";
  }
}

loadQuestion();
