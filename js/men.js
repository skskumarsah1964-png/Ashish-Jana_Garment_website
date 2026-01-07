// script.js - Common Cart Functionality for All Pages

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartCountElement = document.querySelector('.cart-count');
  if (cartCountElement) {
    cartCountElement.textContent = count;
  }
}

// Add to Cart Functionality
document.querySelectorAll('.btn-add-cart').forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.prod-card');
    const title = card.querySelector('h3, h4').textContent.trim();
    const priceText = card.querySelector('.price').textContent;
    const price = parseInt(priceText.replace('₹', '').replace(',', ''));
    const img = card.querySelector('img').src;

    // Check if item already in cart
    const existingItem = cart.find(item => item.title === title);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ title, price, img, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();

    // Nice feedback
    button.textContent = 'Added!';
    button.style.background = '#059669';
    setTimeout(() => {
      button.textContent = 'Add to Cart';
      button.style.background = '';
    }, 1500);
  });
});

// Run on page load
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
});