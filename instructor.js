const ADMIN_PASSWORD = "instructor123"; // change to secure password

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
  
  // Use Google Sheets published as JSON (or Apps Script GET web app)
  const url = "GOOGLE_SHEET_GET_URL"; // replace with GET-enabled URL of your sheet
  const res = await fetch(url);
  const data = await res.json();

  data.forEach(row => {
    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${row.username}</td><td>${row.discord}</td><td>${row.roblox}</td><td>${row.exam}</td><td>${row.score}</td><td>${row.date}</td>`;
    table.appendChild(tr);
  });
}
