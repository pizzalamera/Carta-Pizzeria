// ===========================
//  MENÚ RESPONSIVE + SCROLL
// ===========================

document.addEventListener('DOMContentLoaded', function () {

  const menu = document.getElementById('menuLMP');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const offset = 80;

  // Crear instancia del collapse UNA SOLA VEZ
  const bsCollapse = new bootstrap.Collapse(menu, { toggle: false });

  function closeMenu() {
      if (menu.classList.contains('show')) {
          bsCollapse.hide();
      }
  }

  function scrollOffset(event, id) {
      const target = document.getElementById(id);
      if (target) {
          event.preventDefault();
          const y = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: y, behavior: 'smooth' });
      }
  }

  navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
          const href = this.getAttribute('href');

          if (href.startsWith("#")) {
              scrollOffset(e, href.substring(1));
              setTimeout(closeMenu, 50);
          }
      });
  });

});


// ===========================
//  BOTÓN "PIDE YA" OCULTARSE EN FOOTER
// ===========================

document.addEventListener("scroll", () => {
    const footer = document.querySelector("footer");
    const btn = document.querySelector(".whatsapp-premium-btn");

    if (!footer || !btn) return;

    const footerTop = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (footerTop < windowHeight) {
        btn.classList.add("hide-whatsapp");
        btn.classList.remove("show-whatsapp");
    } else {
        btn.classList.add("show-whatsapp");
        btn.classList.remove("hide-whatsapp");
    }
});


// ===========================
//  FALLBACK PARA ERRORES DE IMAGEN
// ===========================

document.querySelectorAll('img').forEach(img => {
  img.addEventListener('error', () => {
    img.alt = 'Imagen no disponible';
  });
});
