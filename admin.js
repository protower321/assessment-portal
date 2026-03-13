const table = document.getElementById("appTable");

applications.forEach(app => {

let row = document.createElement("tr");

row.innerHTML = `
<td>${app.id}</td>
<td>${app.name}</td>
<td>${app.status}</td>

<td>
<button onclick="viewApplication('${app.id}')">View</button>
</td>

<td>
<button onclick="approve('${app.id}')">Approve</button>
<button onclick="deny('${app.id}')">Deny</button>
</td>
`;

table.appendChild(row);

});

function viewApplication(id){

let app = applications.find(a => a.id === id);

document.getElementById("details").classList.remove("hidden");

document.getElementById("d_name").innerText = app.name;
document.getElementById("d_dob").innerText = app.dob;
document.getElementById("d_email").innerText = app.email;
document.getElementById("d_phone").innerText = app.phone;
document.getElementById("d_address").innerText = app.address;
document.getElementById("d_length").innerText = app.length;
document.getElementById("d_reason").innerText = app.reason;

}

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
