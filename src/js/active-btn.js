function toggleActiveState(button) {
  button.classList.add('active'); // Добавляем класс "active" на кнопку

  setTimeout(function () {
    button.classList.remove('active'); // Удаляем класс "active" с кнопки
  }, 1000); // 1000 миллисекунд = 1 секунда
}
