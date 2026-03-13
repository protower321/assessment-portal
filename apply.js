const form = document.getElementById("applicationForm");
const confirmation = document.getElementById("confirmation");
const appID = document.getElementById("appID");

let currentApplication;

form.addEventListener("submit", function(e){

e.preventDefault();

let id = "CT-" + Math.floor(Math.random()*100000);

currentApplication = {

id:id,
name:document.getElementById("name").value,
dob:document.getElementById("dob").value,
email:document.getElementById("email").value,
phone:document.getElementById("phone").value,
address:document.getElementById("address").value,
length:document.getElementById("length").value,
reason:document.getElementById("reason").value,
status:"Pending"

};

saveApplication(currentApplication);

form.classList.add("hidden");
confirmation.classList.remove("hidden");

appID.innerText = "Application ID: " + id;

});
