
  $(document).ready(function(){
	$('.testimonials__carousel').slick({
		infinite: true,
		speed: 200,
		fade: true,
		slidesToShow: 1,
		prevArrow: '<button type="button" class="slick-prev"><img src="img/left.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="img/right.svg"</button>',
		adaptiveHeight: true
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
	});    //open modal window Request call (main block-promo)


	$('.modal__close_success, .modal__close, modal__close_order, modal__close_free').on( 'click', function() {
		$('.overlay, #success, #request, #order, #free').fadeOut();
	});  //close all modal windows



	$('.button_catalog').each(function(i) {
		$(this).on('click', function() {
			$('#order .modal__subtitle').text($('.catalog__item-subtitle').eq(i).text());
			$('#order .modal__price').text($('.catalog__item-price').eq(i).text());
			$('.overlay, #order').fadeIn();
	});
	});  //open order window by clicking button BUY NOW (also choose currenntly price of each cream)



	$('.button_samples').each(function(i) {
		$(this).on('click', function() {
			$('#free .modal__subtitle').text($('.samples__item-subtitle').eq(i).text());
			$('.overlay, #free').fadeIn();
	});
	});  //open samples(free cream) window by clicking button GET IT FOR FREE (also choose currenntly price of each cream)


	//SEND MAIL
    $('#form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find('input').val("");
            $('.overlay, #success').fadeIn( "fast" );
            $('#form').trigger('reset');
        });
        return false;
    });


	$('.modal').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find('input').val("");
            $('#request, #order, #free').fadeOut( "fast" );  //close currently window and open SUCCESS window by sending mail
            $('.overlay, #success').fadeIn( "fast" );

            $('.modal').trigger('reset');
        });
        return false;
    });



  });

