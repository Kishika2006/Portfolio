// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Simple hover animation effect log
document.querySelectorAll(".skills-list li").forEach(skill => {
  skill.addEventListener("mouseenter", () => {
    console.log(`Hovered over skill: ${skill.textContent}`);
  });
});
