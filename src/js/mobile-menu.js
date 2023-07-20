document.addEventListener('DOMContentLoaded', function () {
  var btnBurger = document.querySelector('.btn-burger');
  var menuOverlay = document.querySelector('.menu-overlay');
  var menuItems = document.querySelectorAll('.mobile-menu-list-item'); // Получаем все пункты меню

  btnBurger.addEventListener('click', function () {
    menuOverlay.style.display = 'block';
  });

  menuItems.forEach(function (menuItem) {
    menuItem.addEventListener('click', function () {
      menuOverlay.style.display = 'none'; // Скрываем меню при выборе пункта
    });
  });
});
