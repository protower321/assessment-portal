function register(){

let username = document.getElementById("username").value
let password = document.getElementById("password").value
let discord = document.getElementById("discord").value
let roblox = document.getElementById("roblox").value

let account = {
username: username,
password: password,
discord: discord,
roblox: roblox
}

localStorage.setItem("account", JSON.stringify(account))

alert("Account successfully created!")

window.location.href = "index.html"

}
