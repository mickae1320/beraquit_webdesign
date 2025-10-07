function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function playGame() {
  const status = document.getElementById("game-status");
  status.textContent = "🎮 You unlocked a TinyTAN dance challenge!";
}

function addToCart(productName) {
  alert(`🛒 ${productName} added to your cart!`);
}