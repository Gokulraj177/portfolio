const typingText = document.querySelector(".typing");
const words = ["Frontend Developer", "Web Designer", "JavaScript Learner"];
let wordIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < words[wordIndex].length) {
        typingText.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 1500);
    }
}

function erase() {
    if (charIndex > 0) {
        typingText.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    type();
});
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});