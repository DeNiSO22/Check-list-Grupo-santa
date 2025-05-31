// Controle de submenu para abrir/fechar ao clicar
document.querySelectorAll('.menu-item').forEach(item => {
  item.addEventListener('click', () => {
    const submenu = item.querySelector('.submenu');
    if (submenu) {
      submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
    }
  });
});

// Proteção da página (exemplo de página protegida)
if (window.location.pathname.includes("pagina_protegida.html")) {
  // Exemplo: se não está logado, redireciona para login.html
  if (sessionStorage.getItem('logado') !== 'true') {
    window.location.href = "login.html"; // trocar pelo seu arquivo de login real
  }
}


