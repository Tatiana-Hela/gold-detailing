const t=()=>{Swal.fire({imageUrl:"https://i.imgur.com/te0KfzL.png",imageWidth:250,imageHeight:90,title:"Щось пішло не так :(",html:'<p class="swal-text">Потрібно спробувати ще, або...</p> <p class="swal-text">Ви можете написати нам в <a class="swal-text-link" href="https://t.me/Detailing_CarWash" target="_blank" rel="noopener noreferrer">Телеграм</a></p>',showConfirmButton:!0,showCloseButton:!0,confirmButtonText:"Відправити повторно",customClass:{title:"swal-title",htmlContainer:"swal-html-container",popup:"swal-popup-custom",showConfirmButton:"swal-confirm-btn",backdrop:"swal-backdrop"}})},e=e=>{if(!e)return;let l=e.querySelector('[name="name"]'),a=e.querySelector('[name="phone"]'),o=e.querySelector('[name="message"]'),n=e.querySelector(".name-hint"),s=e.querySelector(".phone-hint"),r=a.getAttribute("placeholder");document.addEventListener("DOMContentLoaded",()=>{"+380"===a.value.trim()&&(a.value="",a.placeholder=r)}),a.addEventListener("focus",()=>{""===a.value.trim()&&(a.value="+380"),a.placeholder=""}),a.addEventListener("blur",()=>{"+380"===a.value.trim()?(a.value="",a.placeholder=r):""===a.value.trim()&&(a.placeholder=r)}),a.addEventListener("input",()=>{a.value.startsWith("+380")||(a.value="+380")}),e.addEventListener("submit",async function(e){e.preventDefault();let i=!0;if(!/^[а-яА-ЯёЁa-zA-ZіІ\s']+$/.test(l.value)||l.value.length<2?(i=!1,n.textContent="Введіть коректне ім'я (не менше двох букв)"):n.textContent="",!/^\+?\d{10,13}$/.test(a.value)||a.value.length<13||a.value.length>13?(i=!1,s.textContent=`Введіть коректний номер телефону (приклад - +380ХХХХХХХХХ).`):s.textContent="",!i)return;let m=`${l.value}, ${a.value} - Повідомлення від клієнта: ${o.value}`,c=document.getElementById("overlay");c.style.visibility="visible";try{let e=await axios.post("https://golddetailing-backend.onrender.com/submit-form",{message:m});200===e.status?(fbq("track","Lead"),Swal.fire({imageUrl:"https://i.imgur.com/xItRRqf.png",imageWidth:250,imageHeight:90,title:"Дякуємо за звернення!",html:'<p class="swal-text">Ми зв’яжемось з Вами впродовж <br/> <span class="swal-text-secondary"> 5ти хвилин </span></p>',showConfirmButton:!0,showCloseButton:!0,confirmButtonText:"Ок",customClass:{title:"swal-title-ok",htmlContainer:"swal-html-container",popup:"swal-popup-custom",showConfirmButton:"swal-confirm-btn",backdrop:"swal-backdrop"}}),l.value="",a.value="",a.placeholder=r,o.value=""):t()}catch(e){t()}finally{c.style.visibility="hidden"}})},l=document.getElementById("call-form");e(l),document.querySelectorAll(".btn-to-order-service").forEach(t=>{t.addEventListener("click",()=>{Swal.fire({title:"Отримайте консультацію прямо зараз!",html:`
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
      `,showConfirmButton:!1,showCloseButton:!0,customClass:{title:"swal-title-ok",htmlContainer:"swal-html-container",popup:"swal-popup-custom swal-popup-custom--with-call-form",backdrop:"swal-backdrop"}});let t=document.getElementById("callModalForm");e(t)})});
//# sourceMappingURL=index.0ff6eb50.js.map
