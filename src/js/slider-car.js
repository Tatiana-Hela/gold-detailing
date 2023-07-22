document.addEventListener('DOMContentLoaded', function () {
  const sliderItems = document.querySelectorAll('.slider-car__item');
  const defaultActiveIndex = 4;

  sliderItems.forEach(function (item, index) {
    if (index === defaultActiveIndex) {
      item.classList.add('active');
    }
  });

  let activeIndex = defaultActiveIndex;

  sliderItems.forEach(function (item, index) {
    item.addEventListener('click', function () {
      setActiveSlide(index);
    });

    item.addEventListener('click', function () {
      setActiveSlide(index);
    });
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') {
      activeIndex = (activeIndex - 1 + sliderItems.length) % sliderItems.length;
      setActiveSlide(activeIndex);
    }

    if (event.key === 'ArrowRight') {
      activeIndex = (activeIndex + 1) % sliderItems.length;
      setActiveSlide(activeIndex);
    }
  });

  function setActiveSlide(index) {
    sliderItems.forEach(function (item) {
      item.classList.remove('active');
    });

    sliderItems[index].classList.add('active');
    activeIndex = index;
  }
});
