let applications = JSON.parse(localStorage.getItem("applications")) || [];

function saveApplication(app){

applications.push(app);

localStorage.setItem("applications", JSON.stringify(applications));

}
