// active.js
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav-container');
  const indicator = nav.querySelector('.indicator');
  const links = nav.querySelectorAll('a');

  function moveIndicator(el) {
    const rect = el.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();

    indicator.style.width = `${rect.width}px`;
    indicator.style.transform = `translateX(${rect.left - navRect.left}px)`;
  }

  links.forEach(link => {
    link.addEventListener('mouseenter', () => moveIndicator(link));
  });

  // Se quiser manter a posição do primeiro link ativo ao carregar
  const active = nav.querySelector('a.active') || links[0];
  moveIndicator(active);

  nav.addEventListener('mouseleave', () => {
    moveIndicator(active);
  });
});
