const enterBtn = document.getElementById('enter-btn');
const gateOverlay = document.getElementById('gate-overlay');
const soundToggle = document.getElementById('sound-toggle');
const video = document.getElementById('bg-video');
const navHamburger = document.getElementById('nav-hamburger');
const siteNav = document.getElementById('site-nav');

enterBtn.addEventListener('click', () => {
  gateOverlay.classList.add('hidden');
});

soundToggle.addEventListener('click', () => {
  video.muted = !video.muted;
  soundToggle.textContent = video.muted ? '🔇' : '🔊';
});

navHamburger.addEventListener('click', () => {
  siteNav.classList.toggle('nav-open');
});
