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
