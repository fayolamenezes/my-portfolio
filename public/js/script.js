// Apply saved theme on page load
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

// Theme toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  const body = document.body;
  body.classList.toggle("dark-mode");

  // Save the preference
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});


// Highlight current page
const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll("nav a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

// Contact form popup
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for your message!");
    form.reset();
  });
}

// Scroll-triggered animations
const scrollElements = document.querySelectorAll(".scroll-animate");

const elementInView = (el, offset = 100) => {
  const elementTop = el.getBoundingClientRect().top;
  return elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset;
};

const handleScrollAnimation = () => {
  scrollElements.forEach(el => {
    if (elementInView(el)) el.classList.add("active");
  });
};

window.addEventListener("scroll", handleScrollAnimation);
window.addEventListener("load", handleScrollAnimation);
