let current = 0;
let selectedAnswer = null;

function load() {
  selectedAnswer = null;
  document.getElementById("nextBtn").disabled = true;

  let q = questions[current];
  document.getElementById("question").innerText = q.question;

  let html = "";
  q.answers.forEach((a, i) => {
    html += `<button class="answer-btn" onclick="selectAnswer(this)">${a}</button><br><br>`;
  });

  document.getElementById("answers").innerHTML = html;
}

function selectAnswer(button) {
  // remove highlight from all buttons
  document.querySelectorAll(".answer-btn").forEach(btn => btn.classList.remove("selected"));
  
  // highlight the clicked button
  button.classList.add("selected");
  
  selectedAnswer = button.innerText;
  document.getElementById("nextBtn").disabled = false;
}

function next() {
  // Move to next question
  current++;
  if (current < questions.length) {
    load();
  } else {
    alert("Exam finished!"); // you can redirect to results.html if needed
  }
}

load();
