document.addEventListener('click', function(event) {
  console.log('Elemento que disparó el evento:', event.target);
  console.log('ID del elemento:', event.target.id);
  console.log('Clase(s) del elemento:', event.target.className);
  console.log('Texto del elemento:', event.target.textContent);

  const elementId = event.target.id;
  const elementClass = event.target.className;
  
});
