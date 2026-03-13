function login(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let discord = document.getElementById("discord").value;
    let roblox = document.getElementById("roblox").value;

    let stored = JSON.parse(localStorage.getItem("account"));

    if(stored &&
       username === stored.username &&
       password === stored.password &&
       discord === stored.discord &&
       roblox === stored.roblox){
        window.location.href = "dashboard.html";
    } else {
        alert("Login failed. Check all fields.");
    }
}
