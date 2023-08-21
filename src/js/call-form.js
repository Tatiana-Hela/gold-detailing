const form = document.getElementById('call-form');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const messageInput = document.getElementById('message');
const nameHint = document.getElementById('name-hint');
const phoneHint = document.getElementById('phone-hint');

// Сохраняем оригинальный плейсхолдер
const originalPhonePlaceholder = phoneInput.getAttribute('placeholder');
// Обработчик для фокуса на поле ввода телефона
document.addEventListener('DOMContentLoaded', function () {
  if (phoneInput.value.trim() === '+380') {
    phoneInput.value = ''; // Очищаем поле при загрузке страницы, если оно содержит "+380"
    phoneInput.placeholder = originalPhonePlaceholder; // Восстанавливаем плейсхолдер
  }
});

// Обработчик для фокуса на поле ввода телефона
phoneInput.addEventListener('focus', function () {
  if (phoneInput.value.trim() === '') {
    phoneInput.value = '+380'; // Устанавливаем "+380" при фокусе, если поле пустое
  }
  phoneInput.placeholder = ''; // Скрываем плейсхолдер при фокусе
});

// Обработчик для потери фокуса с поля ввода телефона
phoneInput.addEventListener('blur', function () {
  if (phoneInput.value.trim() === '+380') {
    phoneInput.value = ''; // Очищаем поле при потере фокуса, если оно содержит "+380"
    phoneInput.placeholder = originalPhonePlaceholder; // Восстанавливаем плейсхолдер
  } else if (phoneInput.value.trim() === '') {
    phoneInput.placeholder = originalPhonePlaceholder; // Восстанавливаем плейсхолдер при пустом поле
  }
});

form.addEventListener('submit', async function (event) {
  event.preventDefault();

  let valid = true;

  // Проверка имени
  const namePattern = /^[а-яА-ЯёЁa-zA-Z\s']+$/;
  if (!namePattern.test(nameInput.value) || nameInput.value.length < 2) {
    valid = false;
    nameHint.textContent = "Введіть коректне ім'я (не менше двох букв)";
  } else {
    nameHint.textContent = '';
  }

  // Проверка телефона
  const phonePattern = /^\+?\d{10,13}$/;
  const minLength = 10;
  const maxLength = 13;

  if (
    !phonePattern.test(phoneInput.value) ||
    phoneInput.value.length < minLength ||
    phoneInput.value.length > maxLength
  ) {
    valid = false;
    phoneHint.textContent = `Введіть коректний номер телефону (приклад - +380ХХХХХХХХХ).`;
  } else {
    phoneHint.textContent = '';
  }
  if (!valid) {
    return;
  }

  const smsMessage = `${nameInput.value}, ${phoneInput.value} - Повідомлення від клієнта: ${messageInput.value}`;
  // Отправка данных на бэкенд с использованием Axios
  try {
    const response = await axios.post(
      'https://golddetailing-backend.onrender.com/submit-form', // Замените на ваш URL
      {
        message: smsMessage,
      }
    );

    if (response.status === 200) {
      Swal.fire({
        imageUrl: 'https://i.imgur.com/xItRRqf.png',
        imageWidth: 250,
        imageHeight: 90,
        title: 'Дякуємо за звернення!',
        html: '<p class="swal-text">Ми зв’яжемось з Вами впродовж <br/> <span class="swal-text-secondary"> 5ти хвилин </span></p>',
        showConfirmButton: true,
        showCloseButton: true,
        confirmButtonText: 'Ок',
        customClass: {
          title: 'swal-title-ok',
          htmlContainer: 'swal-html-container',
          popup: 'swal-popup-custom',
          showConfirmButton: 'swal-confirm-btn',
          backdrop: 'swal-backdrop',
        },
      });
      nameInput.value = '';
      phoneInput.value = '';
      phoneInput.placeholder = originalPhonePlaceholder;
      messageInput.value = '';
    } else {
      Swal.fire({
        imageUrl: 'https://i.imgur.com/te0KfzL.png',
        imageWidth: 250,
        imageHeight: 90,
        title: 'Щось пішло не так :(',
        html: '<p class="swal-text">Потрібно спробувати ще, або...</p> <p class="swal-text">Ви можете написати нам в <a class="swal-text-link" href="https://web.telegram.org/a/#5530926461" target="_blank" rel="noopener noreferrer">Телеграм</a></p>',
        showConfirmButton: true,
        showCloseButton: true,
        confirmButtonText: 'Відправити повторно',
        customClass: {
          title: 'swal-title',
          htmlContainer: 'swal-html-container',
          popup: 'swal-popup-custom',
          showConfirmButton: 'swal-confirm-btn',
          backdrop: 'swal-backdrop',
        },
      });
    }
  } catch (error) {
    Swal.fire({
      imageUrl: 'https://i.imgur.com/te0KfzL.png',
      imageWidth: 250,
      imageHeight: 90,
      title: 'Щось пішло не так :(',
      html: '<p class="swal-text">Потрібно спробувати ще, або...</p> <p class="swal-text">Ви можете написати нам в <a class="swal-text-link" href="https://web.telegram.org/a/#5530926461" target="_blank" rel="noopener noreferrer">Телеграм</a></p>',
      showConfirmButton: true,
      showCloseButton: true,
      confirmButtonText: 'Відправити повторно',
      customClass: {
        title: 'swal-title',
        htmlContainer: 'swal-html-container',
        popup: 'swal-popup-custom',
        showConfirmButton: 'swal-confirm-btn',
        backdrop: 'swal-backdrop',
      },
    });
  }
});
