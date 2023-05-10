const menuBtn = document.querySelector('.header_icons');
const closeBtn = document.querySelector('.close_menu');

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