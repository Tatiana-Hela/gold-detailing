const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');
  const content = item.querySelector('.accordion-content');

  header.addEventListener('click', () => {
    // Удаляем класс active у всех элементов, кроме текущего
    accordionItems.forEach(accordionItem => {
      if (accordionItem !== item) {
        accordionItem.classList.remove('active');
        accordionItem.querySelector('.accordion-content').style.height = '0';
      }
    });

    // Тогглим класс active только у текущего элемента
    item.classList.toggle('active');

    if (item.classList.contains('active')) {
      content.style.height = content.scrollHeight + 'px';
    } else {
      content.style.height = '0';
    }
  });
});
