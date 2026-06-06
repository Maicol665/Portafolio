document.addEventListener("DOMContentLoaded", () => {

  // Animar barras de habilidades con IntersectionObserver
  const bars = document.querySelectorAll(".skill-bar-fill");

  if (bars.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          bar.style.width = bar.dataset.width + "%";
          observer.unobserve(bar);
        }
      });
    }, { threshold: 0.3 });

    bars.forEach(bar => observer.observe(bar));
  }

  // Marcar enlace activo en la nav
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPage) {
      link.style.color = "var(--negro)";
      link.style.fontWeight = "600";
    }
  });

});
