// Получаем все ссылки внутри навигации
const navLinks = document.querySelectorAll('.nav-menu-list-link');

// Добавляем обработчик события для каждой ссылки
navLinks.forEach(link => {
  link.addEventListener('click', smoothScroll);
});

// Функция для плавного скролла к секции
function smoothScroll(event) {
  // Проверяем, является ли ссылка внутренней (якорь на текущую страницу)
  const isInternalLink = this.getAttribute('href').startsWith('#');

  // Если ссылка внутренняя, отменяем стандартное поведение ссылки и выполняем плавную прокрутку
  if (isInternalLink) {
    event.preventDefault();

    const targetId = this.getAttribute('href'); // Получаем атрибут href ссылки (например, "#about")
    const targetSection = document.querySelector(targetId); // Получаем элемент секции по id

    if (targetSection) {
      const targetPosition = targetSection.getBoundingClientRect().top; // Получаем позицию секции относительно вьюпорта
      const startPosition = window.pageYOffset; // Текущая позиция скролла
      const distance = targetPosition - startPosition; // Расстояние, которое нужно прокрутить

      const duration = 1000; // Время анимации в миллисекундах
      let startTimestamp = null;

      // Функция анимации прокрутки
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

      // Функция для плавной анимации (замедление в начале и в конце)
      function easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t * t + b;
        t -= 2;
        return (c / 2) * (t * t * t + 2) + b;
      }

      // Запускаем анимацию прокрутки
      requestAnimationFrame(animation);
    }
  }
}
