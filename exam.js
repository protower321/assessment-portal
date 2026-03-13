const form = document.getElementById("applicationForm");
const confirmation = document.getElementById("confirmation");

form.addEventListener("submit", function(e){

e.preventDefault();

form.classList.add("hidden");
confirmation.classList.remove("hidden");

});
