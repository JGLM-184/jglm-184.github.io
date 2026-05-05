document.querySelectorAll('.carrossel').forEach(carrossel => {
  const track = carrossel.querySelector('.carrossel-track');
  const slides = carrossel.querySelectorAll('img');

  let index = 0;

  const next = carrossel.querySelector('.next');
  const prev = carrossel.querySelector('.prev');

  next.onclick = () => {
    index = (index + 1) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
  };

  prev.onclick = () => {
    index = (index - 1 + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
  };
});