// Scroll Reveal Animation
const items = document.querySelectorAll(".timeline-item");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

items.forEach(item => observer.observe(item));

// Accordion Expand/Collapse
const headers = document.querySelectorAll(".timeline-header");

headers.forEach(header => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    const btn = header.querySelector(".toggle-btn");

    content.classList.toggle("open");

    if (content.classList.contains("open")) {
      content.style.maxHeight = content.scrollHeight + "px";
      btn.textContent = "–";
    } else {
      content.style.maxHeight = "0px";
      btn.textContent = "+";
    }
  });
});
