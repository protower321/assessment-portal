const ADMIN_PASSWORD = "EdmontonInstructors"; // change this

function loginInstructor() {
    let pass = document.getElementById("adminPass").value;
    if(pass === ADMIN_PASSWORD){
        document.getElementById("resultsPanel").style.display = "block";
        loadResults();
    } else {
        alert("Wrong password");
    }
}

async function loadResults(){
    const table = document.getElementById("resultsTable");

    // Replace with your GET-enabled Apps Script URL
    const url = "https://script.google.com/macros/s/AKfycbynHTzNa8sSAKhbSwm-N0xb5JL4DYbc8M4vAYQEX3nN2J6O6qgL01v23nuh00k2wSSp1w/exec"; 
    const res = await fetch(url);
    const data = await res.json();

    data.forEach(row=>{
        let tr = document.createElement("tr");
        tr.innerHTML = `<td>${row.username}</td><td>${row.discord}</td><td>${row.roblox}</td><td>${row.exam}</td><td>${row.score}</td><td>${row.date}</td>`;
        table.appendChild(tr);
    });
}
