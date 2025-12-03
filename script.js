document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menu-icon");
  const navLinks = document.querySelector(".nav-links");

  // se não achar o menu ou o ícone, não faz nada (evita erro)
  if (!menuIcon || !navLinks) return;

  const links = navLinks.querySelectorAll("a");

  // abre / fecha o menu ao clicar no ícone
  menuIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    navLinks.classList.toggle("active");
  });

  // fecha ao clicar fora
  document.addEventListener("click", (e) => {
    if (!navLinks.contains(e.target) && e.target !== menuIcon) {
      navLinks.classList.remove("active");
    }
  });

  // ativa link atual + fecha menu ao clicar em um item
  links.forEach((link) => {
    link.addEventListener("click", () => {
      links.forEach((l) => l.classList.remove("current"));
      link.classList.add("current");
      navLinks.classList.remove("active");
    });
  });

  // animações ScrollReveal (só se a lib existir)
  if (window.ScrollReveal) {
    ScrollReveal().reveal(".section-title", {
      delay: 150,
      distance: "20px",
      origin: "top",
    });
    ScrollReveal().reveal(".grid-card", {
      interval: 150,
      distance: "20px",
      origin: "bottom",
    });
    ScrollReveal().reveal(".project-card", {
      interval: 150,
      distance: "20px",
      origin: "bottom",
    });
    ScrollReveal().reveal(".about-container img", {
      delay: 150,
      origin: "left",
      distance: "40px",
    });
    ScrollReveal().reveal(".info-box", {
      delay: 200,
      origin: "right",
      distance: "40px",
    });
  }
});
