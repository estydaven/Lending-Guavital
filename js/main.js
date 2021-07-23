$('.effect-slider').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: '<button type="button" class="effect-slider__bottom effect-slider__bottom_prev"></button>',
    nextArrow: '<button type="button" class="effect-slider__bottom effect-slider__bottom_next"></button>',
    dotsClass: 'effect-slider__dots',
    responsive: [
        {
          breakpoint: 1300,
          settings: {
            arrows: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            variableWidth: false           
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            variableWidth: false  
          }
        },
        {
            breakpoint: 700,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows: false,
              variableWidth: false  
            }
        },
        {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              variableWidth: false  
            }
        }
      ]
});

$('.slider-dream').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    centerMode: true,
    variableWidth: true,
    infinite: true,
    focusOnSelect: true,
    cssEase: 'linear',
    touchMove: true,
    prevArrow: '<button type="button" class="effect-slider__bottom effect-slider__bottom_prev"></button>',
    nextArrow: '<button type="button" class="effect-slider__bottom effect-slider__bottom_next"></button>',
    dotsClass: 'effect-slider__dots',
    responsive: [
      {
        breakpoint: 900,
        settings: {
            centerMode: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: false
        }
      }
    ]
});

$(window).on('load resize', function() {
    if ($(window).width() < 640) {
      $('#items:not(.slick-initialized)').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        variableWidth: true,
        infinite: false,
        dotsClass: 'pay__dots'
      });
    } else {
      $("#items.slick-initialized").slick("unslick");
    }
});

$(document).on('click', '.review-info__arrow', function (e) { e.preventDefault(); $(this).toggleClass('active'); $(this).parent().find('.review-info__more').first().slideToggle(300); })

$(document).ready(function () {
    $("#menu").on("click", "a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({ scrollTop: top }, 1500);
    });
});


(function () {
    'use strict';

    function trackScroll() {
        var scrolled = window.pageYOffset;
        var coords = document.documentElement.clientHeight;

        if (scrolled > coords) {
            goTopBtn.classList.add('up_show');
        }
        if (scrolled < coords) {
            goTopBtn.classList.remove('up_show');
        }
    }

    function backToTop() {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -80);
            setTimeout(backToTop, 0);
        }
    }

    var goTopBtn = document.querySelector('.up');

    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
})();