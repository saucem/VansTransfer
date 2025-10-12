window.onload = function() {
  // Reset the form fields when the page loads
  const formPresent = document.getElementById("first-form");
  if (formPresent) {
    formPresent.reset();
  }
};

const buttonToggler = document.querySelector(".navbar-toggler");
const togglerIcon = document.getElementById("toggler-icon")

togglerIcon.className = "bi bi-list";

buttonToggler.addEventListener("click", function() {
  togglerIcon.classList.toggle("bi-list");
  togglerIcon.classList.toggle("bi-x-lg");
});

function goBack() {
  if (window.history.length > 1) {
      window.history.back(); // Regresa a la página anterior
  } else {
      alert("No hay una página anterior en el historial.");
  }
}

