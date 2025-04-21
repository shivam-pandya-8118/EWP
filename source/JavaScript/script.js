// Toggle tool content
document.querySelectorAll(".tool-toggle").forEach((button) => {
  button.addEventListener("click", function () {
    const content = this.parentElement.nextElementSibling;
    content.classList.toggle("active");

    // Change icon based on state
    const icon = this.querySelector("i");
    if (content.classList.contains("active")) {
      icon.classList.remove("fa-chevron-down");
      icon.classList.add("fa-chevron-up");
    } else {
      icon.classList.remove("fa-chevron-up");
      icon.classList.add("fa-chevron-down");
    }
  });
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navMenu = document.getElementById("navMenu");

mobileMenuBtn.addEventListener("click", function () {
  navMenu.classList.toggle("active");

  // Change icon based on state
  const icon = this.querySelector("i");
  if (navMenu.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    // Close mobile menu if open
    navMenu.classList.remove("active");
    mobileMenuBtn.querySelector("i").classList.remove("fa-times");
    mobileMenuBtn.querySelector("i").classList.add("fa-bars");

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 70,
      behavior: "smooth",
    });
  });
});

// Back to top button
const topButton = document.getElementById("topButton");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 300) {
    topButton.classList.add("visible");
  } else {
    topButton.classList.remove("visible");
  }
});

topButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Auto-open the first tool section
document.querySelector(".tool-toggle").click();
