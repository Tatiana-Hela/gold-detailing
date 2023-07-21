const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');
  const content = item.querySelector('.accordion-content');
  const accordionItem = document.querySelector('.accordion-item');

  header.addEventListener('click', () => {
    accordionItem.classList.toggle('active');

    if (accordionItem.classList.contains('active')) {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  });
});
