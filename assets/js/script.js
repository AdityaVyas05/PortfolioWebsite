// Initialize AOS (Animate on Scroll)
AOS.init({
  duration: 1000, // animation duration
  easing: 'ease-in-out',
  once: true, // animation will happen only once
});

// Add smooth scrolling to anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
