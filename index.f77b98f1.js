$(function(){$.fn.scrollToTop=function(){$(this).hide().removeAttr("href"),"0"!=$(window).scrollTop()&&$(this).fadeIn("slow");var e=$(this);$(window).scroll(function(){"0"==$(window).scrollTop()?$(e).fadeOut("slow"):$(e).fadeIn("slow")}),$(this).click(function(){$("html, body").animate({scrollTop:0},"slow")})}}),$(function(){$("#toTop").scrollToTop()});var e=L.map("map").setView([50.426907,30.361476],13);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:18,titleSize:512}).addTo(e),L.marker([50.426907,30.361476]).addTo(e),$(document).ready(function(){$(".gallery__slider-small").slick({slidesToShow:5,slidesToScroll:1,asNavFor:".gallery__slider-big",dots:!1,centerMode:!0,focusOnSelect:!0,adaptiveHeight:!0,mobileFirst:!0,variableWidth:!0,cssEase:"linear",prevArrow:'<button class="slick-prev" aria-label="Previous"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="ffd700"  d="M9.292 15.292l10-10c0.093-0.093 0.203-0.167 0.325-0.217s0.252-0.076 0.383-0.076 0.262 0.026 0.383 0.076c0.121 0.050 0.232 0.124 0.325 0.217s0.167 0.203 0.217 0.325c0.050 0.121 0.076 0.252 0.076 0.383s-0.026 0.261-0.076 0.383c-0.050 0.121-0.124 0.232-0.217 0.325l-9.294 9.292 9.294 9.293c0.188 0.188 0.293 0.442 0.293 0.707s-0.105 0.52-0.293 0.707c-0.188 0.188-0.442 0.293-0.707 0.293s-0.52-0.105-0.707-0.293l-10-10c-0.093-0.093-0.167-0.203-0.217-0.325s-0.076-0.252-0.076-0.383c0-0.131 0.026-0.261 0.076-0.383s0.124-0.232 0.217-0.325z"></path></svg></button>',nextArrow:'<button class="slick-next" aria-label="Next"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="ffd700"  d="M22.708 16.708l-10 10c-0.093 0.093-0.203 0.167-0.325 0.217s-0.252 0.076-0.383 0.076-0.261-0.026-0.383-0.076c-0.121-0.050-0.232-0.124-0.325-0.217s-0.167-0.203-0.217-0.325c-0.050-0.121-0.076-0.252-0.076-0.383s0.026-0.262 0.076-0.383c0.050-0.121 0.124-0.232 0.217-0.325l9.294-9.293-9.294-9.293c-0.188-0.188-0.293-0.442-0.293-0.707s0.105-0.52 0.293-0.707c0.188-0.188 0.442-0.293 0.707-0.293s0.52 0.105 0.707 0.293l10 10c0.093 0.093 0.167 0.203 0.217 0.325s0.076 0.252 0.076 0.383c0 0.131-0.026 0.262-0.076 0.383s-0.124 0.232-0.217 0.325z"></path></svg></button>',responsive:[{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:1,variableWidth:!0}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:1,variableWidth:!0}}]}),$(".gallery__slider-big").slick({slidesToShow:3,slidesToScroll:1,arrows:!1,cssEase:"linear",adaptiveHeight:!0,mobileFirst:!0,centerMode:!0,variableWidth:!0,asNavFor:".gallery__slider-small",cssEase:"linear"})}),document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".btn-burger"),t=document.querySelector(".btn-close"),l=document.querySelector(".menu-overlay"),o=document.querySelectorAll(".mobile-menu-list-item");e.addEventListener("click",function(){l.style.display="block"}),t.addEventListener("click",function(){l.style.display="none"}),o.forEach(function(e){e.addEventListener("click",function(){l.style.display="none"})})}),$(".reviews__card-list").slick({infinite:!0,speed:300,slidesToShow:1,slidesToScroll:1,dots:!1,cssEase:"linear",adaptiveHeight:!0,mobileFirst:!0,variableWidth:!0,centerMode:!0,prevArrow:'<button class="slick-prev" aria-label="Previous"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="ffd700"  d="M9.292 15.292l10-10c0.093-0.093 0.203-0.167 0.325-0.217s0.252-0.076 0.383-0.076 0.262 0.026 0.383 0.076c0.121 0.050 0.232 0.124 0.325 0.217s0.167 0.203 0.217 0.325c0.050 0.121 0.076 0.252 0.076 0.383s-0.026 0.261-0.076 0.383c-0.050 0.121-0.124 0.232-0.217 0.325l-9.294 9.292 9.294 9.293c0.188 0.188 0.293 0.442 0.293 0.707s-0.105 0.52-0.293 0.707c-0.188 0.188-0.442 0.293-0.707 0.293s-0.52-0.105-0.707-0.293l-10-10c-0.093-0.093-0.167-0.203-0.217-0.325s-0.076-0.252-0.076-0.383c0-0.131 0.026-0.261 0.076-0.383s0.124-0.232 0.217-0.325z"></path></svg></button>',nextArrow:'<button class="slick-next" aria-label="Next"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="ffd700"  d="M22.708 16.708l-10 10c-0.093 0.093-0.203 0.167-0.325 0.217s-0.252 0.076-0.383 0.076-0.261-0.026-0.383-0.076c-0.121-0.050-0.232-0.124-0.325-0.217s-0.167-0.203-0.217-0.325c-0.050-0.121-0.076-0.252-0.076-0.383s0.026-0.262 0.076-0.383c0.050-0.121 0.124-0.232 0.217-0.325l9.294-9.293-9.294-9.293c-0.188-0.188-0.293-0.442-0.293-0.707s0.105-0.52 0.293-0.707c0.188-0.188 0.442-0.293 0.707-0.293s0.52 0.105 0.707 0.293l10 10c0.093 0.093 0.167 0.203 0.217 0.325s0.076 0.252 0.076 0.383c0 0.131-0.026 0.262-0.076 0.383s-0.124 0.232-0.217 0.325z"></path></svg></button>'});const t=document.querySelectorAll(".nav-menu-list-link");function l(e){let t=this.getAttribute("href").startsWith("#");if(t){e.preventDefault();let t=this.getAttribute("href"),l=document.querySelector(t);if(l){let e=l.getBoundingClientRect().top,t=window.pageYOffset,o=e-t,s=null;requestAnimationFrame(function e(l){var n;s||(s=l);let i=l-s;window.scrollTo(0,(n=i/500)<1?o/2*n*n*n+t:o/2*((n-=2)*n*n+2)+t),i<1e3&&requestAnimationFrame(e)})}}}t.forEach(e=>{e.addEventListener("click",l)});const o=document.querySelectorAll(".accordion-item");o.forEach(e=>{let t=e.querySelector(".accordion-header"),l=e.querySelector(".accordion-content");t.addEventListener("click",()=>{o.forEach(t=>{t!==e&&(t.classList.remove("active"),t.querySelector(".accordion-content").style.height="0")}),e.classList.toggle("active"),e.classList.contains("active")?l.style.height=l.scrollHeight+"px":l.style.height="0"})}),document.addEventListener("DOMContentLoaded",function(){let e=document.querySelectorAll(".slider-car__item");e.forEach(function(e,t){4===t&&e.classList.add("active")});let t=4;function l(l){e.forEach(function(e){e.classList.remove("active")}),e[l].classList.add("active"),t=l}e.forEach(function(e,t){e.addEventListener("click",function(){l(t)}),e.addEventListener("click",function(){l(t)})}),document.addEventListener("keydown",function(o){"ArrowLeft"===o.key&&l(t=(t-1+e.length)%e.length),"ArrowRight"===o.key&&l(t=(t+1)%e.length)})});const s=document.getElementById("call-form"),n=document.getElementById("name"),i=document.getElementById("phone"),a=document.getElementById("message"),r=document.getElementById("name-hint"),c=document.getElementById("phone-hint"),d=i.getAttribute("placeholder");document.addEventListener("DOMContentLoaded",function(){"+380"===i.value.trim()&&(i.value="",i.placeholder=d)}),i.addEventListener("focus",function(){""===i.value.trim()&&(i.value="+380"),i.placeholder=""}),i.addEventListener("blur",function(){"+380"===i.value.trim()?(i.value="",i.placeholder=d):""===i.value.trim()&&(i.placeholder=d)}),s.addEventListener("submit",async function(e){e.preventDefault();let t=!0;if(!/^[а-яА-ЯёЁa-zA-Z\s']+$/.test(n.value)||n.value.length<2?(t=!1,r.textContent="Введіть коректне ім'я (не менше двох букв)"):r.textContent="",!/^\+?\d{10,13}$/.test(i.value)||i.value.length<10||i.value.length>13?(t=!1,c.textContent=`Введіть коректний номер телефону (приклад - +380ХХХХХХХХХ).`):c.textContent="",t)try{let e=await axios.post("https://golddetailing-backend.onrender.com/submit-form",{name:n.value,phone:i.value,message:a.value});200===e.status?(Swal.fire({imageUrl:"https://i.imgur.com/xItRRqf.png",imageWidth:250,imageHeight:90,title:"Дякуємо за звернення!",html:'<p class="swal-text">Ми зв’яжемось з Вами впродовж <br/> <span class="swal-text-secondary"> 5ти хвилин </span></p>',showConfirmButton:!0,showCloseButton:!0,confirmButtonText:"Ок",customClass:{title:"swal-title-ok",htmlContainer:"swal-html-container",popup:"swal-popup-custom",showConfirmButton:"swal-confirm-btn",backdrop:"swal-backdrop"}}),n.value="",i.value="",i.placeholder=d,a.value=""):Swal.fire({imageUrl:"https://i.imgur.com/te0KfzL.png",imageWidth:250,imageHeight:90,title:"Щось пішло не так :(",html:'<p class="swal-text">Потрібно спробувати ще, або...</p> <p class="swal-text">Ви можете написати нам в <a class="swal-text-link" href="https://web.telegram.org/a/#5530926461" target="_blank" rel="noopener noreferrer">Телеграм</a></p>',showConfirmButton:!0,showCloseButton:!0,confirmButtonText:"Відправити повторно",customClass:{title:"swal-title",htmlContainer:"swal-html-container",popup:"swal-popup-custom",showConfirmButton:"swal-confirm-btn",backdrop:"swal-backdrop"}})}catch(e){Swal.fire({imageUrl:"https://i.imgur.com/te0KfzL.png",imageWidth:250,imageHeight:90,title:"Щось пішло не так :(",html:'<p class="swal-text">Потрібно спробувати ще, або...</p> <p class="swal-text">Ви можете написати нам в <a class="swal-text-link" href="https://web.telegram.org/a/#5530926461" target="_blank" rel="noopener noreferrer">Телеграм</a></p>',showConfirmButton:!0,showCloseButton:!0,confirmButtonText:"Відправити повторно",customClass:{title:"swal-title",htmlContainer:"swal-html-container",popup:"swal-popup-custom",showConfirmButton:"swal-confirm-btn",backdrop:"swal-backdrop"}})}});
//# sourceMappingURL=index.f77b98f1.js.map
