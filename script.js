document.addEventListener("DOMContentLoaded", function () {
  // Seleciona todas as seções
  const sections = document.querySelectorAll("section");

  // Cria uma instância do IntersectionObserver
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(`Seção visível: ${entry.target.id}`);
          // Se a seção está visível, adiciona a classe 'active'
          entry.target.classList.add("active");
        } else {
          console.log(`Seção fora de vista: ${entry.target.id}`);
          // Se a seção não está visível, remove a classe 'active'
          entry.target.classList.remove("active");
        }
      });
    },
    { threshold: 0.5 } 
  );

  // Observa cada seção
  sections.forEach((section) => {
    observer.observe(section);
  });
});
