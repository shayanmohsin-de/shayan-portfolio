const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    message.style.marginTop = "10px";
    message.style.color = "green";
    message.textContent = "Thank you! Your message has been sent.";
    form.reset();
});

window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    header.style.boxShadow = window.scrollY > 50 
        ? "0 4px 10px rgba(0,0,0,0.2)" 
        : "none";
});
