const toast = document.getElementById('toast');

function mostrarToast(mensagem) {
  toast.textContent = mensagem;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 1500);
}

document.querySelectorAll('.contato').forEach(btn => {
  btn.onclick = (e) => {
    e.preventDefault();

    const texto = btn.dataset.texto;
    navigator.clipboard.writeText(texto);

    const tipo = btn.dataset.tooltip.includes('email') ? 'Email copiado!\njoaogabrielm591@gmail.com' : 'Número de celular copiado! \n(11) 97646-8515';

    mostrarToast(`${tipo}`);
  };
});