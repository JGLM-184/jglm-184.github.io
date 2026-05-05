const modal = document.getElementById('modalImg');
const modalImg = document.getElementById('imgExpandida');
const fechar = document.querySelector('.fechar');
const btnPrev = document.querySelector('.modal-prev');
const btnNext = document.querySelector('.modal-next');

let imagens = [];
let indexAtual = 0;

document.querySelectorAll('.carrossel').forEach(carrossel => {
  const imgs = carrossel.querySelectorAll('img');

  imgs.forEach((img, i) => {
    img.onclick = () => {
      imagens = Array.from(imgs);
      indexAtual = i;
      abrirModal();
    };
  });
});

function abrirModal() {
  modal.style.display = 'flex';
  atualizarImagem();
}

function atualizarImagem() {
  modalImg.src = imagens[indexAtual].src;
}

btnNext.onclick = () => {
  indexAtual = (indexAtual + 1) % imagens.length;
  atualizarImagem();
};

btnPrev.onclick = () => {
  indexAtual = (indexAtual - 1 + imagens.length) % imagens.length;
  atualizarImagem();
};

fechar.onclick = () => modal.style.display = 'none';

modal.onclick = e => {
  if (e.target === modal) modal.style.display = 'none';
};