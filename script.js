const menuBtn = document.querySelector('.header_icons');
const closeBtn = document.querySelector('.close_menu');
let darkMode = false;
const darkBtn = document.querySelector('.moon');

if (menuBtn) {
  menuBtn.addEventListener('click', function() {
    document.getElementById('sidebar').classList.remove('closed');
    document.getElementById('sidebar').classList.add('active');
  });
} else {
  console.error("No se encontró el botón de menú");
}

if (closeBtn) {
  closeBtn.addEventListener('click', function() {
    document.getElementById('sidebar').classList.remove('active');
    document.getElementById('sidebar').classList.add('closed');
  });
} else {
  console.error("No se encontró el botón de cerrar");
}

if (darkBtn) {
  if (darkMode === true) {
    darkBtn.addEventListener('click', function() {
      document.getElementById('body').classList.remove('active');
      document.getElementById('body').classList.add('closed');
    });
  }
} else {
  console.error("No se pudo activar el modo oscuro");
}