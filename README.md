<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>TinyTAN Universe</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header>
    <h1 class="logo">TinyTAN</h1>
    <div class="logos">
      <img src="bts-logo.png" alt="BTS Logo" />
      <img src="army-logo.png" alt="ARMY Logo" />
    </div>
    <nav>
      <button onclick="scrollToSection('shop')">🛍️ Shop Now</button>
      <button onclick="scrollToSection('games')">🎮 Play Games</button>
      <button onclick="scrollToSection('music')">🎵 Listen to Music</button>
    </nav>
  </header>

  <section class="hero">
    <h2>Step Into the Magic Door with TinyTAN</h2>
    <p>Comfort, courage, and connection — brought to life by BTS.</p>
    <div class="cta-buttons">
      <button onclick="scrollToSection('shop')">🛍️ Shop Now</button>
      <button onclick="scrollToSection('games')">🎮 Play Games</button>
      <button onclick="scrollToSection('music')">🎵 Listen to Music</button>
    </div>
    <img src="tinytan-group.png" alt="TinyTAN Group Pose" class="hero-img" />
    <img src="fan-jimin.png" alt="Fan holding Jimin Plush" class="fan-img" />
  </section>

  <section id="shop" class="products">
    <h2>Bestsellers</h2>
    <div class="product-grid">
      <div class="product">
        <img src="jimin-plush.png" alt="Jimin Plush" />
        <h3>Jimin Plush</h3>
        <p>$9.99</p>
        <button onclick="addToCart('Jimin Plush')">Add to Cart</button>
      </div>
      <div class="product">
        <img src="rm-plush.png" alt="RM Street Style" />
        <h3>RM Street Style</h3>
        <p>$8.99</p>
        <button onclick="addToCart('RM Street Style')">Add to Cart</button>
      </div>
      <div class="product">
        <img src="yoongi-plush.png" alt="Drummer Yoongi" />
        <h3>Drummer Yoongi</h3>
        <p>$7.99</p>
        <button onclick="addToCart('Drummer Yoongi')">Add to Cart</button>
      </div>
      <div class="product">
        <img src="jk-figure.png" alt="JK Figure" />
        <h3>JK Figure</h3>
        <p>$9.49</p>
        <button onclick="addToCart('JK Figure')">Add to Cart</button>
      </div>
    </div>
  </section>

  <section class="reviews">
    <h2>Customer Reviews</h2>
    <div class="review">⭐️⭐️⭐️⭐️⭐️ Andrea M.: “Soft, adorable and great quality! A must have for ARMY!”</div>
    <div class="review">⭐️⭐️⭐️⭐️⭐️ Clau A.: “Jimmy is so cute, I take him with me everywhere!”</div>
    <div class="review">⭐️⭐️⭐️⭐️⭐️ Katie L.: “Perfect gift for my fellow ARMY! So cute and well-made.”</div>
  </section>

  <section id="games" class="games">
    <h2>TinyTAN Play Zone</h2>
    <button onclick="playGame()">Start Game</button>
    <p id="game-status"></p>
  </section>

  <section id="music" class="music">
    <h2>Music Lounge</h2>
    <audio controls>
      <source src="bts-track.mp3" type="audio/mp3" />
      Your browser does not support the audio element.
    </audio>
  </section>

  <footer>
    <div class="footer-logos">
      <img src="bts-logo.png" alt="BTS Logo" />
      <img src="army-logo.png" alt="ARMY Logo" />
    </div>
    <nav>
      <a href="#shop">Shop</a>
      <a href="#games">Games</a>
      <a href="#music">Music</a>
      <a href="#community">Community</a>
    </nav>
    <div class="social">
      <a href="#">Instagram</a>
      <a href="#">Twitter</a>
      <a href="#">TikTok</a>
      <a href="#">YouTube</a>
    </div>
    <form>
      <label for="email">Join the TinyTAN Circle</label>
      <input type="email" id="email" placeholder="Enter your email" />
      <button type="submit">Subscribe</button>
    </form>
  </footer>

  <script src="script.js"></script>
</body>
</html>
added to your cart!`);
}
