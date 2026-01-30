document.querySelectorAll('.lightbox').forEach(img => {
  img.addEventListener('click', e => {
    e.preventDefault();
    const overlay = document.getElementById('lightbox-overlay');
    overlay.innerHTML = `<img src="${img.href}">`;
    overlay.style.display = 'flex';
  });
});

document.getElementById('lightbox-overlay').addEventListener('click', () => {
  document.getElementById('lightbox-overlay').style.display = 'none';
});
