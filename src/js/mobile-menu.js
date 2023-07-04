document.addEventListener('DOMContentLoaded', function () {
  var btnBurger = document.querySelector('.btn-burger');
  var menuOverlay = document.querySelector('.menu-overlay');
  var btnClose = document.querySelector('.btn-close');

  btnBurger.addEventListener('click', function () {
    menuOverlay.style.display = 'block';
  });

  btnClose.addEventListener('click', function () {
    menuOverlay.style.display = 'none';
  });
});
