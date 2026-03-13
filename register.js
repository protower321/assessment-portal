function register(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let discord = document.getElementById("discord").value;
    let roblox = document.getElementById("roblox").value;

    if(!username || !password || !discord || !roblox){
        alert("Please fill all fields");
        return;
    }

    const account = { username, password, discord, roblox };
    localStorage.setItem("account", JSON.stringify(account));
    alert("Account created!");
    window.location.href = "index.html";
}
