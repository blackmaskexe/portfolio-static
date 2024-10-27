// "use strict";

// DOM Components
const navBar = document.querySelector(".navigation-bar");

// Navbar Smooth Scroll Implementation:
navBar.addEventListener("click", function (event) {
  if (!event.target.classList.contains("linkedin-link")) {
    event.preventDefault();
  }
  const targetClassId = event.target.getAttribute("href");
  const targetSection = document
    .querySelector(targetClassId)
    .getBoundingClientRect();

  window.scrollTo({
    left: targetSection.left,
    top: targetSection.top + window.pageYOffset,
    behavior: "smooth",
  });
});
