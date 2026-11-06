const button = document.getElementById('goldhenBtn');
const statusText = document.getElementById('statusText');
button.addEventListener('click', () => {
  statusText.textContent = 'Interfaz lista · integración técnica pendiente';
  button.textContent = 'Interfaz lista';
  button.disabled = true;
  button.style.opacity = '.7';
});
