const body = document.body;

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  body.style.setProperty(
    "--parallax-y",
    `${scrollY * -0.01}px`
  );
});