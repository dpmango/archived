$(document).ready(function(){

	$('.goods__tabs').on('click', 'li:not(.active)', function() {
	$(this)
	  .addClass('active').siblings().removeClass('active')
	  .closest('.container').find('div.goods__content').removeClass('active').eq($(this).index()).addClass('active');
	});

	$('.goods__content__models').on('click', '.goods__content__models__img-wrap:not(.active)', function(e) {
		e.preventDefault();
		$(this).addClass('active').siblings().removeClass('active');
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
		    996 : {
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
	$('a[href^="#section"]').click(function(){
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top}, 1000);
        return false; 
	});

});


var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();
