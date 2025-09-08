const buttonToggler = document.querySelector(".navbar-toggler");
const togglerIcon = document.getElementById("toggler-icon")

togglerIcon.className = "bi bi-list";

buttonToggler.addEventListener("click", function() {
  togglerIcon.classList.toggle("bi-list");
  togglerIcon.classList.toggle("bi-x-lg");
});