// Show "Back to Top" button on scroll
window.onscroll = function() {
  const backToTopButton = document.querySelector(".back-to-top");
  if (document.documentElement.scrollTop > 300) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
};

// Scroll to the top function
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Smooth Scroll to Section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}
