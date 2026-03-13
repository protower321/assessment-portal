function downloadPDF(){

let text = `
Residency Application

Application ID: ${currentApplication.id}

Name: ${currentApplication.name}
DOB: ${currentApplication.dob}
Email: ${currentApplication.email}
Phone: ${currentApplication.phone}

Address: ${currentApplication.address}

Length of Residency:
${currentApplication.length}

Reason:
${currentApplication.reason}

Status: Pending
`;

let blob = new Blob([text], {type: "text/plain"});

let link = document.createElement("a");

link.href = URL.createObjectURL(blob);

link.download = currentApplication.id + ".txt";

link.click();

}
