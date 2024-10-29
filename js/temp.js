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
      document.querySelector("#projects-me-nav-link").classList.add("active");
      console.log("at least this block is runnung dow");
    }
  },
  {
    root: null,
    threshold: 0.8,
  }
);
projectsObserver.observe(projectsSection);
