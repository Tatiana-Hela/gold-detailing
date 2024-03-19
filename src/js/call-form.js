// TODO: rename all comments from Russian to English 🤡

const showErrorMessage = () => {
  Swal.fire({
    imageUrl: 'https://i.imgur.com/te0KfzL.png',
    imageWidth: 250,
    imageHeight: 90,
    title: 'Щось пішло не так :(',
    html: '<p class="swal-text">Потрібно спробувати ще, або...</p> <p class="swal-text">Ви можете написати нам в <a class="swal-text-link" href="https://t.me/Detailing_CarWash" target="_blank" rel="noopener noreferrer">Телеграм</a></p>',
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
};

/**
 * @param {HTMLFormElement} form 
 */
const initForm = (form) => {
  if (!form) return;

  const nameInput = form.querySelector('[name="name"]');
  const phoneInput = form.querySelector('[name="phone"]');
  const messageInput = form.querySelector('[name="message"]');
  const nameHint = form.querySelector('.name-hint');
  const phoneHint = form.querySelector('.phone-hint');

  // Сохраняем оригинальный плейсхолдер
  const originalPhonePlaceholder = phoneInput.getAttribute('placeholder');
  // Обработчик для фокуса на поле ввода телефона
  document.addEventListener('DOMContentLoaded', () => {
    if (phoneInput.value.trim() === '+380') {
      phoneInput.value = ''; // Очищаем поле при загрузке страницы, если оно содержит "+380"
      phoneInput.placeholder = originalPhonePlaceholder; // Восстанавливаем плейсхолдер
    }
  });

  // Обработчик для фокуса на поле ввода телефона
  phoneInput.addEventListener('focus', () => {
    if (phoneInput.value.trim() === '') {
      phoneInput.value = '+380'; // Устанавливаем "+380" при фокусе, если поле пустое
    }
    phoneInput.placeholder = ''; // Скрываем плейсхолдер при фокусе
  });

  // Обработчик для потери фокуса с поля ввода телефона
  phoneInput.addEventListener('blur', () => {
    if (phoneInput.value.trim() === '+380') {
      phoneInput.value = ''; // Очищаем поле при потере фокуса, если оно содержит "+380"
      phoneInput.placeholder = originalPhonePlaceholder; // Восстанавливаем плейсхолдер
    } else if (phoneInput.value.trim() === '') {
      phoneInput.placeholder = originalPhonePlaceholder; // Восстанавливаем плейсхолдер при пустом поле
    }
  });

  phoneInput.addEventListener('input', () => {
    if (!phoneInput.value.startsWith('+380')) {
      phoneInput.value = '+380'; // Восстанавливаем "+380" если пользователь удалил начало
    }
  });

  form.addEventListener('submit', async function (event) {
    event.preventDefault();

    let valid = true;

    // Проверка имени
    const namePattern = /^[а-яА-ЯёЁa-zA-ZіІ\s']+$/;
    if (!namePattern.test(nameInput.value) || nameInput.value.length < 2) {
      valid = false;
      nameHint.textContent = "Введіть коректне ім'я (не менше двох букв)";
    } else {
      nameHint.textContent = '';
    }

    // Проверка телефона
    const phonePattern = /^\+?\d{10,13}$/;
    const minLength = 13;
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
    const overlay = document.getElementById('overlay');
    overlay.style.visibility = 'visible';
    try {
      const response = await axios.post(
        'https://golddetailing-backend.onrender.com/submit-form', // Замените на ваш URL
        {
          message: smsMessage,
        }
      );

      if (response.status === 200) {
        fbq('track', 'Lead');
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
        showErrorMessage();
      }
    } catch (error) {
      showErrorMessage();
    } finally {
      overlay.style.visibility = 'hidden';
    }
  });
};

const commonForm = document.getElementById('call-form');

initForm(commonForm);

document.querySelectorAll('.btn-to-order-service').forEach((btn) => {
  btn.addEventListener('click', () => {
    Swal.fire({
      title: 'Отримайте консультацію прямо зараз!',
      html: `
        <form class="call-form__form call-form__form--in-modal" id="callModalForm">
            <input
                class="call-form__form-input"
                type="text"
                id="name"
                placeholder="Ваше ім’я*"
                autocomplete="off"
                name="name"
            />
            <!-- Подсказка для имени -->
            <div class="input-hint name-hint"></div>
            
            <input
                class="call-form__form-input"
                type="tel"
                id="phone"
                placeholder="Номер телефону*"
                autocomplete="off"
                value="+380"
                name="phone"
            />
            <!-- Подсказка для телефона -->
            <div class="input-hint phone-hint"></div>

            <textarea
                class="call-form__form-textarea"
                id="message"
                placeholder="Ваше повідомлення (не обов’язково)"
                name="message"
            ></textarea>

            <button class="call-form__form-btn" type="submit">
                Передзвоніть мені
            </button>
        </form>
      `,
      showConfirmButton: false,
      showCloseButton: true,
      customClass: {
        title: 'swal-title-ok',
        htmlContainer: 'swal-html-container',
        popup: 'swal-popup-custom swal-popup-custom--with-call-form',
        backdrop: 'swal-backdrop',
      },
    });

    const callModalForm = document.getElementById('callModalForm');

    initForm(callModalForm);
  });
})
