const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

// MENU TOGGLE
menu.onclick = () => {
  nav.classList.toggle("active");
};

// CLOSE MENU WHEN CLICK LINK
document.querySelectorAll("nav a").forEach(link => {
  link.onclick = () => {
    nav.classList.remove("active");
  };
});

// TYPING EFFECT
const text = ["Frontend Developer", "Web Designer"];
let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {
  current = text[i];

  if (!isDeleting) {
    document.getElementById("typing").textContent = current.substring(0, j++);
    if (j > current.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    document.getElementById("typing").textContent = current.substring(0, j--);
    if (j < 0) {
      isDeleting = false;
      i = (i + 1) % text.length;
    }
  }
  setTimeout(type, isDeleting ? 50 : 100);
}

type();