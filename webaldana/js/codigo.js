document.addEventListener('DOMContentLoaded', function() {
  // Menú hamburguesa
  const horizontal = document.querySelector("#horizontal");
  const abrir = document.querySelector("#abrir");
  const cerrar = document.querySelector("#cerrar");
  const menuLinks = document.querySelectorAll(".horizontal li a");
  
  let overlay = document.querySelector(".menu-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.classList.add("menu-overlay");
    document.body.appendChild(overlay);
  }

  function abrirMenu() {
    horizontal.classList.add("visible");
    overlay.classList.add("active");
    document.body.classList.add("menu-open");
  }

  function cerrarMenu() {
    horizontal.classList.remove("visible");
    overlay.classList.remove("active");
    document.body.classList.remove("menu-open");
  }

  abrir.addEventListener("click", abrirMenu);
  cerrar.addEventListener("click", cerrarMenu);
  overlay.addEventListener("click", cerrarMenu);

  menuLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      if (!link.href.endsWith('#')) {
        cerrarMenu();
      }
    });
  });
  
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && horizontal.classList.contains("visible")) {
      cerrarMenu();
    }
  });

  // Validación del formulario
  const contactForm = document.getElementById('contactForm');
  const successMessage = document.getElementById('successMessage');

  if (contactForm && successMessage) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Validar teléfono
      const phoneInput = document.getElementById('phone');
      const phoneRegex = /^\d{1,3}\d{10}$/;
      if (!phoneRegex.test(phoneInput.value)) {
        alert('El teléfono debe tener código de país (1-3 dígitos) seguido de 10 dígitos');
        phoneInput.focus();
        return false;
      }
      
      // Si todo está bien, mostrar mensaje 
      contactForm.style.display = 'none';
      successMessage.style.display = 'block';
      
      return false; // Prevenir envío real del formulario
    });
  }

  // Animación al scroll
  function revealOnScroll() {
    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => {
      const elementPosition = el.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
      if (elementPosition < screenPosition) {
        el.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
});