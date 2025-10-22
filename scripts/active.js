document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav-container');
  const indicator = nav.querySelector('.indicator');
  const links = nav.querySelectorAll('a');

  // Função que ajusta a posição e direção do indicador
  function moveIndicator(el) {
    const rect = el.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();

    // Verifica se o menu está em modo coluna (mobile)
    const isColumn = window.getComputedStyle(nav).flexDirection === 'column';

    if (isColumn) {
      // Modo coluna → indicador move na vertical
      indicator.style.width = '100%';
      indicator.style.height = `${rect.height}px`;
      indicator.style.transform = `translateY(${rect.top - navRect.top}px)`;
    } else {
      // Modo linha → indicador move na horizontal
      indicator.style.height = '100%';
      indicator.style.width = `${rect.width}px`;
      indicator.style.transform = `translateX(${rect.left - navRect.left}px)`;
    }
  }

  // Atualiza o indicador ao passar o mouse
  links.forEach(link => {
    link.addEventListener('mouseenter', () => moveIndicator(link));
  });

  // Marca o ativo inicial
  const active = nav.querySelector('a.active') || links[0];
  moveIndicator(active);

  // Volta ao ativo ao sair do menu
  nav.addEventListener('mouseleave', () => moveIndicator(active));

  // 🔁 Recalcula posição ao redimensionar a janela
  window.addEventListener('resize', () => moveIndicator(active));
});
