document.addEventListener('DOMContentLoaded', function () {
  var btnBurger = document.querySelector('.btn-burger');
  var btnClose = document.querySelector('.btn-close');
  var menuOverlay = document.querySelector('.menu-overlay');
  var menuItems = document.querySelectorAll('.mobile-menu-list-item');

  btnBurger.addEventListener('click', function () {
    menuOverlay.style.display = 'block';
  });

  btnClose.addEventListener('click', function () {
    menuOverlay.style.display = 'none';
  });

  menuItems.forEach(function (menuItem) {
    menuItem.addEventListener('click', function () {
      menuOverlay.style.display = 'none';
    });
  });
});
