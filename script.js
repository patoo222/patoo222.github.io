document.addEventListener('DOMContentLoaded', () => {
  const texto = document.querySelector('.texto');
  const autor = document.querySelector('.autor');
  const contenido = document.getElementById('contenido');
  const repositorio = document.querySelector('.repositorio');
  const contentRight = document.querySelector('.content-right');

  texto.addEventListener('animationend', () => {
    // Ocultar texto y autor
    texto.style.display = 'none';
    autor.style.display = 'none';

    // Mostrar REPOSITORIO
    repositorio.style.display = 'block';  // Asegurar que esté visible para animar
    repositorio.classList.add('visible');

    // Después de 2 segundos, ocultar REPOSITORIO y mostrar contenido
    setTimeout(() => {
      repositorio.classList.remove('visible');
      repositorio.style.display = 'none';

      // Mostrar contenido y animar items
      contenido.style.display = 'flex';

      // Mostrar content-right con fade-in
      contentRight.classList.add('visible');

      animarItems();
    }, 2000);
  });

  function animarItems() {
    const items = document.querySelectorAll('.content-left .item');
    items.forEach((item, i) => {
      item.style.opacity = 0;
      item.style.transform = 'scale(0.3)';
      setTimeout(() => {
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        item.style.opacity = 1;
        item.style.transform = 'scale(1)';
      }, i * 200);
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const texto = document.querySelector('.texto');
  const autor = document.querySelector('.autor');
  const contenido = document.getElementById('contenido');
  const repositorio = document.querySelector('.repositorio');
  const repositoryText = document.querySelector('.repository-text');

  texto.addEventListener('animationend', () => {
    autor.style.display = 'none';
    texto.style.display = 'none';

    // Mostrar REPOSITORIO con fade in
    repositorio.classList.add('visible');

    // Después de 2 segundos, ocultar REPOSITORIO, mostrar Repository y contenido
    setTimeout(() => {
      repositorio.classList.remove('visible');
      repositorio.style.display = 'none';

      repositoryText.classList.add('visible');  // Mostrar "Repository"
      contenido.style.display = 'flex';

      animarItems();
    }, 2000);
  });

  function animarItems() {
    const items = document.querySelectorAll('.content-left .item');
    items.forEach((item, i) => {
      setTimeout(() => {
        item.style.opacity = 1;
        item.style.transform = 'scale(1)';
      }, i * 300);
    });
  }
});
