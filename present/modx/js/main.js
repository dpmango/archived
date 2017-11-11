
$(document).ready(function(){

	$('.goods__tabs').on('click', 'li:not(.active)', function() {
	$(this)
	  .addClass('active').siblings().removeClass('active')
	  .closest('.container').find('div.goods__content').removeClass('active').eq($(this).index()).addClass('active');
	});

	$('.goods__content__models').on('click', '.goods__content__models__img-wrap:not(.active)', function(e) {
		e.preventDefault();
		$(this)
		.addClass('active').siblings().removeClass('active')
		.closest('.goods__content').find('.pen-toggle').removeClass('active').eq($(this).index()-1).addClass('active');
	});

	$('#popup-email-contact').hide();

	$('#popup-email-contact--togle').click(function(){
		$('#popup-email-contact').slideToggle();
	});

	function headerFloat() {
		if ($(window).scrollTop() > 660) {
			$('.header--floating').addClass('active');
		} else {
			$('.header--floating').removeClass('active');
		}
	}

	headerFloat();

	$(window).scroll(function () {
		headerFloat();

	});

	$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});
	$('.popup-gallery-2').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});

	// Загрузка видео
    // $('.video__wrap img').click(function(){
    // 	$('.video__wrap').html('<iframe width="481" height="302" src="https://www.youtube.com/embed/3r9bGkaaaPk" frameborder="0" allowfullscreen></iframe>');
    // });

    // меню гамбургер

	$("#show-me-menu").click(function(){
        $('.mobile-nav').slideToggle(300);
        $('body').css('overflow-y', 'hidden');
        $(this).css('visibility', 'hidden');
	});

	$("#hide-me-menu").click(function(){
        $('.mobile-nav').slideToggle(300);
        $('body').css('overflow-y', 'scroll');
        $("#show-me-menu").css('visibility', 'visible');
	});

	// Карусельки

	$("#owl-gallery").owlCarousel({
		loop: true,
		nav: true,
		dots: true,
		items: 3,
		autoplay:true,
		autoplayTimeout:7000,
		autoplayHoverPause:true,
		margin: 20,
		responsive : {
		    0 : {
		        items: 1
		    },
		    640 : {
		        items: 2
		    },
		    768 : {
		        items: 3
		    }
		}
	});

	$("#owl-testimonials").owlCarousel({
		loop: true,
		nav: true,
		dots: true,
		items: 4,
		autoplay:true,
		autoplayTimeout:7000,
		autoplayHoverPause:true,
		margin: 20,
		responsive : {
		    0 : {
		        items: 1
		    },
		    640 : {
		        items: 3
		    },
		    996 : {
		        items: 4
		    }
		}
	});


 	// Prevent # errors
	$('[href="#"]').click(function (e) {
		e.preventDefault();
	});

	// smoth scroll
	$('a[href^="#section"]').click(function(event){
        var el = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(el).offset().top}, 1000);
        event.preventDefault();
	});
	
	$('.form__container__input label').click(function(event){
	    $(this).parent('.form__container__input').find('input').focus();
	});
	
	$("input[name=phone]").mask("+7 (999) 999-9999");
    
    $('.btn--goods-cta').click(function(e){
        tovar = $(this).data('order');
        console.log(tovar);
        $('#order-good-form input[name=tovar]').data('tovar', tovar);
        $('#order-good-form input[name=tovar]').val(tovar);
    });


    $('.video__play').click(function(ev){
        $(this).hide();
        //$("#some_id iframe").attr('src', $("#some_id iframe", parent).attr('src') + '?autoplay=1');
        $("#video")[0].src += "&autoplay=1";
        ev.preventDefault();
    });
});

// Заказ товара
$(function() {
    $('#order-good-form').submit(function() {
        var f_name = $(this).find('input[name=name]').val();
        var f_phone = $(this).find('input[name=phone]').val();
        var f_email = $(this).find('input[name=email]').val();
        var f_text = $(this).find('textarea[name=message]').val();
        var tovar = $(this).find('input[name=tovar]').val();
        var tovar2 = $(this).find('input[name=tovar]').data('tovar');
        
        console.log("tover data attr: " + tovar2);
        
        if (f_email.length > 0 && f_name.length >= 4 && f_phone.length >= 10) {
            if( isValidEmailAddress( f_email ) ) {
                _rc('send', 'order', {
                    'name': f_name,
                    'phone': f_phone,
                    'email': f_email,
                    'customerComment': f_text + "Товар: " + tovar2,
                    'customTransactionId': url('?transaction_id'),
                    'orderMethod': 'feedback',
                    'callback': function(success, response) {
                        if (success) {
                            alert('Спасибо, ваша заявка принята! Наши менеджеры свяжутся с вами в ближайшее время для уточнения деталей заказа'); 
                        }
                    }
                });
            }
        } 
        else if (f_name.length >= 4 && f_phone.length >= 10 ) {
            _rc('send', 'order', {
                'name': f_name,
                'phone': f_phone,
                'email': f_email,
                'customerComment': f_text + "Товар: " + tovar2,
                'customTransactionId': url('?transaction_id'),
                'orderMethod': 'feedback',
                'callback': function(success, response) {
                    if (success) {
                        alert('Спасибо, ваша заявка принята! Наши менеджеры свяжутся с вами в ближайшее время для уточнения деталей заказа'); 
                    }
                }
            });
        }
    });
});

function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
};

$(function() {
    $('#main_contact_form').submit(function() {
        var f_name = $(this).find('input[name=name]').val();
        var f_phone = $(this).find('input[name=phone]').val();
        var f_email = $(this).find('input[name=email]').val();
        var f_text = $(this).find('textarea[name=message]').val();
        
        console.log(isValidEmailAddress( f_email ));
        
        if (f_email.length > 0 && f_name.length >= 4 && f_phone.length >= 10) {
            if( isValidEmailAddress( f_email ) ) {
                _rc('send', 'order', {
                    'name': f_name,
                    'phone': f_phone,
                    'email': f_email,
                    'customerComment': f_text,
                    'customTransactionId': url('?transaction_id'),
                    'orderMethod': 'feedback',
                    'callback': function(success, response) {
                        if (success) {
                            alert('Спасибо, ваша заявка принята! Наши менеджеры свяжутся с вами в ближайшее время для уточнения деталей заказа'); 
                        }
                    }
                });
            }
        } 
        else if (f_name.length >= 4 && f_phone.length >= 10 ) {
            _rc('send', 'order', {
                'name': f_name,
                'phone': f_phone,
                'email': f_email,
                'customerComment': f_text,
                'customTransactionId': url('?transaction_id'),
                'orderMethod': 'feedback',
                'callback': function(success, response) {
                    if (success) {
                        alert('Спасибо, ваша заявка принята! Наши менеджеры свяжутся с вами в ближайшее время для уточнения деталей заказа'); 
                    }
                }
            });
        }
    });
});

var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       false,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();
