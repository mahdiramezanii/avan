// js/script.js
document.addEventListener('DOMContentLoaded', function() {
  // ----- countdown timer (25 Mordad = approx Aug 16, 2026) -----
  // Persian calendar: 25 Mordad 1405 ≈ August 16, 2026
  const target = new Date('2026-08-16T00:00:00+0430').getTime();

  function updateCountdown() {
    const now = Date.now();
    let diff = target - now;
    if (diff < 0) diff = 0;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  // ----- mobile hamburger menu -----
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('active');
  });

  // close menu on link click (mobile)
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });

  // ----- smooth scroll for all anchor links -----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ----- navbar background on scroll -----
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 60) {
      navbar.style.background = 'rgba(11, 13, 21, 0.9)';
      navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.4)';
    } else {
      navbar.style.background = 'rgba(11, 13, 21, 0.7)';
      navbar.style.boxShadow = 'none';
    }
  });

  // ----- early access form submission -----
  const form = document.getElementById('early-form');
  const message = document.getElementById('form-message');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    // show success message
    message.style.display = 'block';
    form.reset();
    // hide after 5 seconds
    setTimeout(() => {
      message.style.display = 'none';
    }, 5000);
  });
});