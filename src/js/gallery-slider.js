$(document).ready(function () {
  $('.gallery__slider-small').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.gallery__slider-big',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    adaptiveHeight: true,
    mobileFirst: true,
    variableWidth: true,
    cssEase: 'linear',
    prevArrow:
      '<button class="slick-prev" aria-label="Previous"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="ffd700"  d="M9.292 15.292l10-10c0.093-0.093 0.203-0.167 0.325-0.217s0.252-0.076 0.383-0.076 0.262 0.026 0.383 0.076c0.121 0.050 0.232 0.124 0.325 0.217s0.167 0.203 0.217 0.325c0.050 0.121 0.076 0.252 0.076 0.383s-0.026 0.261-0.076 0.383c-0.050 0.121-0.124 0.232-0.217 0.325l-9.294 9.292 9.294 9.293c0.188 0.188 0.293 0.442 0.293 0.707s-0.105 0.52-0.293 0.707c-0.188 0.188-0.442 0.293-0.707 0.293s-0.52-0.105-0.707-0.293l-10-10c-0.093-0.093-0.167-0.203-0.217-0.325s-0.076-0.252-0.076-0.383c0-0.131 0.026-0.261 0.076-0.383s0.124-0.232 0.217-0.325z"></path></svg></button>',
    nextArrow:
      '<button class="slick-next" aria-label="Next"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="ffd700"  d="M22.708 16.708l-10 10c-0.093 0.093-0.203 0.167-0.325 0.217s-0.252 0.076-0.383 0.076-0.261-0.026-0.383-0.076c-0.121-0.050-0.232-0.124-0.325-0.217s-0.167-0.203-0.217-0.325c-0.050-0.121-0.076-0.252-0.076-0.383s0.026-0.262 0.076-0.383c0.050-0.121 0.124-0.232 0.217-0.325l9.294-9.293-9.294-9.293c-0.188-0.188-0.293-0.442-0.293-0.707s0.105-0.52 0.293-0.707c0.188-0.188 0.442-0.293 0.707-0.293s0.52 0.105 0.707 0.293l10 10c0.093 0.093 0.167 0.203 0.217 0.325s0.076 0.252 0.076 0.383c0 0.131-0.026 0.262-0.076 0.383s-0.124 0.232-0.217 0.325z"></path></svg></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          variableWidth: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: true,
        },
      },
    ],
  });

  $('.gallery__slider-big').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    cssEase: 'linear',
    adaptiveHeight: true,
    mobileFirst: true,
    centerMode: true,
    variableWidth: true,
    asNavFor: '.gallery__slider-small',
    cssEase: 'linear',
  });
});
