$(function(){$.fn.scrollToTop=function(){$(this).hide().removeAttr("href"),"0"!=$(window).scrollTop()&&$(this).fadeIn("slow");var e=$(this);$(window).scroll(function(){"0"==$(window).scrollTop()?$(e).fadeOut("slow"):$(e).fadeIn("slow")}),$(this).click(function(){$("html, body").animate({scrollTop:0},"slow")})}}),$(function(){$("#toTop").scrollToTop()});var e=L.map("map").setView([50.43186,30.359328],13);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:18,titleSize:512}).addTo(e),L.marker([50.43186,30.359328]).addTo(e),$(document).ready(function(){$(".gallery__slider-small").slick({slidesToShow:5,slidesToScroll:1,asNavFor:".gallery__slider-big",dots:!1,centerMode:!0,focusOnSelect:!0,variableWidth:!0,cssEase:"linear",prevArrow:'<button class="slick-prev" aria-label="Previous"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="ffd700"  d="M9.292 15.292l10-10c0.093-0.093 0.203-0.167 0.325-0.217s0.252-0.076 0.383-0.076 0.262 0.026 0.383 0.076c0.121 0.050 0.232 0.124 0.325 0.217s0.167 0.203 0.217 0.325c0.050 0.121 0.076 0.252 0.076 0.383s-0.026 0.261-0.076 0.383c-0.050 0.121-0.124 0.232-0.217 0.325l-9.294 9.292 9.294 9.293c0.188 0.188 0.293 0.442 0.293 0.707s-0.105 0.52-0.293 0.707c-0.188 0.188-0.442 0.293-0.707 0.293s-0.52-0.105-0.707-0.293l-10-10c-0.093-0.093-0.167-0.203-0.217-0.325s-0.076-0.252-0.076-0.383c0-0.131 0.026-0.261 0.076-0.383s0.124-0.232 0.217-0.325z"></path></svg></button>',nextArrow:'<button class="slick-next" aria-label="Next"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="ffd700"  d="M22.708 16.708l-10 10c-0.093 0.093-0.203 0.167-0.325 0.217s-0.252 0.076-0.383 0.076-0.261-0.026-0.383-0.076c-0.121-0.050-0.232-0.124-0.325-0.217s-0.167-0.203-0.217-0.325c-0.050-0.121-0.076-0.252-0.076-0.383s0.026-0.262 0.076-0.383c0.050-0.121 0.124-0.232 0.217-0.325l9.294-9.293-9.294-9.293c-0.188-0.188-0.293-0.442-0.293-0.707s0.105-0.52 0.293-0.707c0.188-0.188 0.442-0.293 0.707-0.293s0.52 0.105 0.707 0.293l10 10c0.093 0.093 0.167 0.203 0.217 0.325s0.076 0.252 0.076 0.383c0 0.131-0.026 0.262-0.076 0.383s-0.124 0.232-0.217 0.325z"></path></svg></button>',responsive:[{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:1,variableWidth:!0}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:1,variableWidth:!0}}]}),$(".gallery__slider-big").slick({slidesToShow:3,slidesToScroll:1,arrows:!1,cssEase:"linear",adaptiveHeight:!0,centerMode:!0,variableWidth:!0,asNavFor:".gallery__slider-small",cssEase:"linear"})}),document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".btn-burger"),t=document.querySelector(".btn-close"),s=document.querySelector(".menu-overlay"),l=document.querySelectorAll(".mobile-menu-list-item");e.addEventListener("click",function(){s.style.display="block"}),t.addEventListener("click",function(){s.style.display="none"}),l.forEach(function(e){e.addEventListener("click",function(){s.style.display="none"})})}),$(".reviews__card-list").slick({infinite:!0,speed:300,slidesToShow:1,slidesToScroll:1,dots:!1,cssEase:"linear",adaptiveHeight:!0,mobileFirst:!0,variableWidth:!0,centerMode:!0,prevArrow:'<button class="slick-prev" aria-label="Previous"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="ffd700"  d="M9.292 15.292l10-10c0.093-0.093 0.203-0.167 0.325-0.217s0.252-0.076 0.383-0.076 0.262 0.026 0.383 0.076c0.121 0.050 0.232 0.124 0.325 0.217s0.167 0.203 0.217 0.325c0.050 0.121 0.076 0.252 0.076 0.383s-0.026 0.261-0.076 0.383c-0.050 0.121-0.124 0.232-0.217 0.325l-9.294 9.292 9.294 9.293c0.188 0.188 0.293 0.442 0.293 0.707s-0.105 0.52-0.293 0.707c-0.188 0.188-0.442 0.293-0.707 0.293s-0.52-0.105-0.707-0.293l-10-10c-0.093-0.093-0.167-0.203-0.217-0.325s-0.076-0.252-0.076-0.383c0-0.131 0.026-0.261 0.076-0.383s0.124-0.232 0.217-0.325z"></path></svg></button>',nextArrow:'<button class="slick-next" aria-label="Next"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="ffd700"  d="M22.708 16.708l-10 10c-0.093 0.093-0.203 0.167-0.325 0.217s-0.252 0.076-0.383 0.076-0.261-0.026-0.383-0.076c-0.121-0.050-0.232-0.124-0.325-0.217s-0.167-0.203-0.217-0.325c-0.050-0.121-0.076-0.252-0.076-0.383s0.026-0.262 0.076-0.383c0.050-0.121 0.124-0.232 0.217-0.325l9.294-9.293-9.294-9.293c-0.188-0.188-0.293-0.442-0.293-0.707s0.105-0.52 0.293-0.707c0.188-0.188 0.442-0.293 0.707-0.293s0.52 0.105 0.707 0.293l10 10c0.093 0.093 0.167 0.203 0.217 0.325s0.076 0.252 0.076 0.383c0 0.131-0.026 0.262-0.076 0.383s-0.124 0.232-0.217 0.325z"></path></svg></button>'});const t=document.querySelectorAll(".nav-menu-list-link");function s(e){let t=this.getAttribute("href").startsWith("#");if(t){e.preventDefault();let t=this.getAttribute("href"),s=document.querySelector(t);if(s){let e=s.getBoundingClientRect().top,t=window.pageYOffset,l=e-t,o=null;requestAnimationFrame(function e(s){var i;o||(o=s);let c=s-o;window.scrollTo(0,(i=c/500)<1?l/2*i*i*i+t:l/2*((i-=2)*i*i+2)+t),c<1e3&&requestAnimationFrame(e)})}}}t.forEach(e=>{e.addEventListener("click",s)});const l=document.querySelectorAll(".accordion-item");l.forEach(e=>{let t=e.querySelector(".accordion-header"),s=e.querySelector(".accordion-content");t.addEventListener("click",()=>{l.forEach(t=>{t!==e&&(t.classList.remove("active"),t.querySelector(".accordion-content").style.height="0")}),e.classList.toggle("active"),e.classList.contains("active")?s.style.height=s.scrollHeight+"px":s.style.height="0"})}),document.addEventListener("DOMContentLoaded",function(){let e=document.querySelectorAll(".slider-car__item");e.forEach(function(e,t){4===t&&e.classList.add("active")});let t=4;function s(s){e.forEach(function(e){e.classList.remove("active")}),e[s].classList.add("active"),t=s}e.forEach(function(e,t){e.addEventListener("click",function(){s(t)}),e.addEventListener("click",function(){s(t)})}),document.addEventListener("keydown",function(l){"ArrowLeft"===l.key&&s(t=(t-1+e.length)%e.length),"ArrowRight"===l.key&&s(t=(t+1)%e.length)})});const o=document.querySelectorAll(".accordion-item");o.forEach(e=>{let t=e.querySelector(".accordion-header"),s=e.querySelector(".accordion-content");t.addEventListener("click",()=>{o.forEach(t=>{t!==e&&(t.classList.remove("active"),t.querySelector(".accordion-content").style.height="0")}),e.classList.toggle("active"),e.classList.contains("active")?s.style.height=s.scrollHeight+"px":s.style.height="0"})});
//# sourceMappingURL=detailing.050bb401.js.map