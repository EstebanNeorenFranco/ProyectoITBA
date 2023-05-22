const cartBtn = document.querySelector('.cart_box_btn');


let cartItems = [];

function addToCart(productName) {
  cartItems.push(productName);
  updateCart(); 
}

function updateCart() {
  const cartElement = document.getElementById('cart');
  cartElement.innerHTML = ''; 

  cartItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    cartElement.appendChild(li);
  });
}


if (cartBtn) {
  cartBtn.addEventListener('click', function() {
    const carrito = document.getElementById('carrito');
    if (carrito.classList.contains('active')) {
      carrito.classList.remove('active');
      carrito.classList.add('close');
    } else {
      carrito.classList.remove('close');
      carrito.classList.add('active');
    }
  });
} else {
  console.error("No se encontró el botón de carrito");
}