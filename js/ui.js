document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector("nav");
  if (nav) {
    window.addEventListener("scroll", () =>
      nav.classList.toggle("scrolled", window.scrollY > 50)
    );
  }

  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const links = document.querySelectorAll(".nav-links");
  
  links.forEach(link => {
    const linkPath = link.getAttribute("href").split("/").pop();
    if (linkPath === currentPath) {
      link.classList.add("active");
    }
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    document.body.classList.add("scrolled");
  } else {
    document.body.classList.remove("scrolled");
  }
});

function filterGallery(btn, cat) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.art-card').forEach(card => {
        const show = cat === 'all' || card.dataset.cat === cat;
        card.style.display = show ? '' : 'none';
    });
} 

      const slidesEl  = document.getElementById('slides');
      const counter   = document.getElementById('slide-counter');
      const progressBar = document.getElementById('progress-bar');
      const total     = document.querySelectorAll('.slide').length;
      let current     = 0;

      function updateUI() {
        slidesEl.style.transform = `translateX(-${current * 100}%)`;
        counter.textContent = `${current + 1} / ${total}`;
        progressBar.style.width = `${((current + 1) / total) * 100}%`;
      }

      function goTo(index) {
        current = (index + total) % total;
        updateUI();
      }

      document.getElementById('nextBtn').addEventListener('click', () => goTo(current + 1));
      document.getElementById('prevBtn').addEventListener('click', () => goTo(current - 1));

      updateUI();