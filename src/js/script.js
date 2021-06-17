/* let answer = confirm("Do you have 18 years old?");
console.log(answer); */



/* if (2*4 == 8*2) {
    console.log('Yes')
} else {
    console.log('No');
} */



/* let answer = prompt("Are you Mila?")
if (answer =='yes') {
    console.log('Welcome');
} else {
    console.log('Go away!');
} */


/* 
const num = 52;
if (num < 49) {
    console.log("Wrong");
} else if (num > 51) {
    console.log("Wrong, sorry");
} else {
    console.log('Coool, you win!');
} */



// ЦИКЛЫ->

/* for (let i = 1; i < 8; i++) {
    console.log(i);
} */


//ФУНКЦИИ 

/* function funcName(a, b) {
    console.log(a+b)
}
funcName(3, 5); */



  $(document).ready(function(){
    $('.testimonials__carousel').slick({
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/right.svg"</button>',
        dots: true,
        dotsClass: 'slick-dots',

    });


    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.catalog__wrapper').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });



      function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog__item-content').eq(i).toggleClass('catalog__item-content_active');
                $('.catalog__item-about').eq(i).toggleClass('catalog__item-about_active');
            });
        });
    }

    toggleSlide('.catalog__item-link');
    toggleSlide('.catalog__item-about-back');


    //modal

    $('[data-modal=request]').on( 'click', function() {
        $('.overlay, #request').fadeIn();
    });


    $('[data-modal=confirm]').on( 'click', function() {
        $('#request').hide();
        $('#success').fadeIn();
    });

    $('.modal__close_success, .modal__close, modal__close_order').on( 'click', function() {
        $('.overlay, #success, #request, #order').fadeOut();
    });



    $('.button_catalog').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__subtitle').text($('.catalog__item-subtitle').eq(i).text());
            $('#order .modal__price').text($('.catalog__item-price').eq(i).text());
            $('.overlay, #order').fadeIn();
    });
    });
      
  });


