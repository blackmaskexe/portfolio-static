"use strict";

// DOM Components
const navBar = document.querySelector(".navigation-bar");
const navBarSections = document.querySelectorAll(".nav-section-link");
const heroSection = document.querySelector(".hero");
const aboutSection = document.querySelector(".about-me");
const projectsSection = document.querySelector(".projects");
////////////////////////////////////////
////////////////////////////////////////

// NAVBAR SCRIPT:
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

// Sticky navbar integration:
const manageStickyNavbar = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    navBar.classList.add("sticky", "navbar-white-bg");
  } else {
    navBar.classList.remove("sticky", "navbar-white-bg");
  }
};

const heroObserver = new IntersectionObserver(manageStickyNavbar, {
  root: null,
  threshold: 0,
});
heroObserver.observe(heroSection);

// Implementing Section Highlighting in the Navbar:
// detecting hero section:
const heroObserverNew = new IntersectionObserver(
  function (entries, observer) {
    const [entry] = entries;
    console.log(entry);
    if (entry.isIntersecting) {
      // remove all actives:
      navBarSections.forEach(function (sectionLink) {
        sectionLink.classList.remove("active");
        console.log("hati ya nahi pagal");
      });
      document.querySelector("#hero-nav-link").classList.add("active");
      console.log("at least this block is runnung dow");
    }
  },
  {
    root: null,
    threshold: 0.8,
  }
);
heroObserverNew.observe(heroSection);

// detecting about section:
const aboutObserver = new IntersectionObserver(
  function (entries, observer) {
    const [entry] = entries;
    console.log(entry);
    if (entry.isIntersecting) {
      // remove all actives:
      navBarSections.forEach(function (sectionLink) {
        sectionLink.classList.remove("active");
        console.log("hati ya nahi pagal");
      });
      document.querySelector("#about-me-nav-link").classList.add("active");
      console.log("at least this block is runnung dow");
    }
  },
  {
    root: null,
    threshold: 0.8,
  }
);
aboutObserver.observe(aboutSection);

// detecting projects:
const projectsObserver = new IntersectionObserver(
  function (entries, observer) {
    const [entry] = entries;
    console.log(entry);
    if (entry.isIntersecting) {
      // remove all actives:
      navBarSections.forEach(function (sectionLink) {
        sectionLink.classList.remove("active");
        console.log("hati ya nahi pagal");
      });
      document.querySelector("#projects-nav-link").classList.add("active");
      console.log("at least this block is runnung dow");
    }
  },
  {
    root: null,
    threshold: 0.8,
  }
);
projectsObserver.observe(projectsSection);

////////////////////////////////////////
////////////////////////////////////////
