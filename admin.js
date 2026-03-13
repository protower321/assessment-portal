const table = document.getElementById("appTable");

applications.forEach(app => {

let row = document.createElement("tr");

row.innerHTML = `
<td>${app.id}</td>
<td>${app.name}</td>
<td>${app.status}</td>
<td>
<button onclick="approve('${app.id}')">Approve</button>
<button onclick="deny('${app.id}')">Deny</button>
</td>
`;

table.appendChild(row);

});

function approve(id){

applications.forEach(app=>{
if(app.id === id) app.status="Approved";
});

localStorage.setItem("applications",JSON.stringify(applications));

location.reload();

}

function deny(id){

applications.forEach(app=>{
if(app.id === id) app.status="Denied";
});

localStorage.setItem("applications",JSON.stringify(applications));

location.reload();

}
