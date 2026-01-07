
  const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      hamburger.innerHTML = navLinks.classList.contains('active') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelector('.cart-count').textContent = count;
  }

  document.querySelectorAll('.btn-add-cart').forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.prod-card');
      const title = card.querySelector('h4, h3').textContent;
      const priceText = card.querySelector('.price').textContent;
      const price = parseInt(priceText.replace('₹', '').replace(',', ''));
      const img = card.querySelector('img').src;

      const existingItem = cart.find(item => item.title === title);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({ title, price, img, quantity: 1 });
      }

      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartCount();
      alert(`${title} added to cart!`);
    });
  });

  updateCartCount(); // Page load pe count update