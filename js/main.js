const links = document.querySelectorAll("nav a");
const currentPage = location.pathname.split("/").pop();

links.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.style.color = "#0077ff";
    link.style.fontWeight = "600";
  }
});
// ===== Scroll Reveal =====

const revealElements = document.querySelectorAll(
  '.timeline-item, .project-category, .resume-section, .card'
);

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add('active');
      el.classList.add('reveal');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ===== Timeline Progress Line =====

function updateTimelineProgress() {
  const timeline = document.querySelector(".timeline");

  if (!timeline) return;

  const rect = timeline.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  const scrollProgress = Math.min(
    Math.max((windowHeight - rect.top) / rect.height, 0),
    1
  );

  timeline.style.setProperty("--timeline-progress", scrollProgress);

  timeline.style.setProperty(
    "height",
    `${timeline.offsetHeight}px`
  );

  const line = timeline;
  line.style.setProperty("--progress", scrollProgress);
}

window.addEventListener("scroll", updateTimelineProgress);
window.addEventListener("load", updateTimelineProgress);
