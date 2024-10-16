const matrix = document.getElementById('matrix');
const images = ['./img1.png', './img2.png', './img3.png']; // Replace with your images

function createImage() {
  const img = document.createElement('img');
  img.src = images[Math.floor(Math.random() * images.length)];
  img.classList.add('image');
  img.style.left = `${Math.random() * 100}vw`;
  img.style.animationDuration = `${Math.random() * 5 + 3}s`; // Randomize speed
  matrix.appendChild(img);

  // Remove the image after animation ends
  img.addEventListener('animationend', () => {
    img.remove();
  });
}

// Create multiple images at intervals
setInterval(createImage, 300);
