<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Enimal’s Tech World</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script>
    // Set the page title using JavaScript
    document.title = "Enimal’s Tech World";
  </script>
  <style>
    body { font-family: Arial, sans-serif; background: #f5f5f5; margin: 0; }
    nav { background: #023047; padding: 1em; }
    nav a { color: #fff; margin: 0 1em; text-decoration: none; font-weight: bold; }
    .container { max-width: 700px; margin: 2em auto; background: #fff; padding: 2em; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
    section { display: none; }
    section.active { display: block; }
    h1, h2 { color: #023047; }
    form label { display: block; margin-top: 1em; }
    form input, form textarea { width: 100%; padding: 0.5em; }
    form button { background: #219EBC; color: #fff; border: none; padding: 0.75em 1.5em; margin-top: 1em; cursor: pointer; }
  </style>
</head>
<body>
  <nav>
    <a href="#home" onclick="showPage('home')">Home</a>
    <a href="#about" onclick="showPage('about')">About Us</a>
    <a href="#contact" onclick="showPage('contact')">Contact Us</a>
  </nav>
  <div class="container">
    <section id="home" class="active">
      <h1>Welcome to Enimal’s Tech World</h1>
      <h2>Technology & Machine Language</h2>
      <p>
        <b>Technology</b> is the use of science and engineering to solve problems, create tools, and improve everyday life. Computers, the internet, and smart devices are all results of technology that keep our world connected and running smoothly.
      </p>
      <p>
        <b>Machine language</b> is the most basic form of programming, made only with 0s and 1s. It “speaks” directly to a computer’s hardware, telling it exactly what to do[9][3][6]. It is fast but very hard for humans to read and write, making high-level languages much easier for coding and learning[9][3].
      </p>
    </section>
    <section id="about">
      <h1>About Us</h1>
      <p>
        My name is <b>Enimal</b>. I am passionate about sharing knowledge about computers, technology, and coding. My goal is to help others understand the basics of how computers work and inspire learning about modern technology.
      </p>
    </section>
    <section id="contact">
      <h1>Contact Us</h1>
      <form>
        <label for="name">Name</label>
        <input id="name" name="name" type="text" required>
        <label for="email">Email</label>
        <input id="email" name="email" type="email" required>
        <label for="message">Message</label>
        <textarea id="message" name="message" rows="4" required></textarea>
        <button type="submit">Send</button>
      </form>
      <p>Or email: <b>enimaltech@email.com</b></p>
    </section>
  </div>
  <script>
    function showPage(page) {
      // Hide all sections
      document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
      // Show selected
      document.getElementById(page).classList.add('active');
    }
    // Default to Home page on load
    showPage('home');
  </script>
</body>
</html>
      
