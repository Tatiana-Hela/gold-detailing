const navLinks = document.querySelectorAll('.nav-menu-list-link');

navLinks.forEach(link => {
  link.addEventListener('click', smoothScroll);
});

function smoothScroll(event) {
  const isInternalLink = this.getAttribute('href').startsWith('#');

  if (isInternalLink) {
    event.preventDefault();

    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      const targetPosition = targetSection.getBoundingClientRect().top;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;

      const duration = 1000;
      let startTimestamp = null;

      function animation(timestamp) {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = timestamp - startTimestamp;

        window.scrollTo(
          0,
          easeInOutCubic(progress, startPosition, distance, duration)
        );

        if (progress < duration) {
          requestAnimationFrame(animation);
        }
      }

      function easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t * t + b;
        t -= 2;
        return (c / 2) * (t * t * t + 2) + b;
      }

      requestAnimationFrame(animation);
    }
  }
}
