// main.js

document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth"
        });
      });
    });
  
    // Simple alert on form submission (you can customize this later)
    const contactForm = document.querySelector("#contactForm");
    if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent actual submission
        alert("Thank you for contacting us! We'll get back to you soon.");
        contactForm.reset();
      });
    }
  });
  <script>
  function togglePackages() {
    const section = document.getElementById("packages-section");
    section.style.display = section.style.display === "none" ? "block" : "none";
  }
</script>

