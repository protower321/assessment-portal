let current = 0
let score = 0

function load(){

let q = questions[current]

document.getElementById("question").innerText = q.question

let html=""

q.answers.forEach((a,i)=>{

html += `<button onclick="answer(${i})">${a}</button><br><br>`

})

document.getElementById("answers").innerHTML = html

}

function answer(i){

if(i === questions[current].correct){

score++

}

}

function next(){

current++

if(current < questions.length){

load()

}

else{

localStorage.setItem("score",score)

window.location.href="results.html"

}

}

load()

function submitResultsToSheet(score) {
  let account = JSON.parse(localStorage.getItem("account"));
  let data = {
    username: account.username,
    discord: account.discord,
    roblox: account.roblox,
    exam: "Basic Knowledge Test",
    score: score
  };

  fetch("GOOGLE_FORM_URL", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
  })
  .then(res => console.log("Result submitted"))
  .catch(err => console.error("Submission failed", err));
}

// Inside next() when exam finishes:
if(current >= questions.length){
    localStorage.setItem("score",score)
    submitResultsToSheet(score)
    window.location.href="results.html"
}
