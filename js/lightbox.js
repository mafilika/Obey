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

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close-lightbox");

document.querySelectorAll(".lightbox-trigger").forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.getAttribute("data-full");
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", e => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});
