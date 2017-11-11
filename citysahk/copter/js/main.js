$(document).ready(function(){

	$(".owl-carousel").owlCarousel({
		loop:true,
		nav: false,
		dots: true,
		responsive : {
		    // breakpoint from 0 up
		    0 : {
		        items:1,
		    },
		    // breakpoint from 480 up
		    480 : {
		        items:2,
		    },
		    // breakpoint from 768 up
		    768 : {
		        items:3
		    }
		}
	});

	var click = 1;

	$(".hamburger").on("click", clickHamb);

	function clickHamb() {
	    if ( click == 1 ) {
	        $(this).addClass('is-active');
	        $('.mobile-nav').slideToggle(300);
	        click = 2;
	    } else {
			$(this).removeClass('is-active');
			$('.mobile-nav').hide();
	        click = 1;
	    }
	}

	var click2 = 1;

	$(".ico-search").on("click", clickSearch);

	function clickSearch() {
	    if ( click2 == 1 ) {
	        $('.header-search-form').css('opacity', '1');
			$(this).addClass('active');
	        click2 = 2;
	    } else {
			$('.header-search-form').css('opacity', '0');
			$(this).removeClass('active');
	        click2 = 1;
	    }
	}

	$('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

	// Mask input
	$("#phone_mask").mask("+7 (999) 999-9999");
	$("#phone_mask1").mask("+7 (999) 999-9999");
	$("#phone_mask2").mask("+7 (999) 999-9999");

 	// Prevent # errors
	$('[href="#"]').click(function (e) {
		e.preventDefault();
	});

	// плавный переход к якорю
	$('a[href^="#section"]').click(function(){
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top}, 1000);
        return false; 
	});

	/*$(window).scroll(function(){
		if($(window).scrollTop() > 500 ){
			$('.navigation').css('display', 'block');
		} else {
			$('.navigation').css('display', 'none');
		}
		if($(window).scrollTop() > 700 ){
			$('.floating-header').css('visibility', 'visible').fadeIn(500);
		} else {
			$('.floating-header').css('visibility', 'hidden').fadeOut(500);
		}
	});*/

 	/* 
	$(window).scroll(function(){
		if($(window).scrollTop() > 0 ){
			$('.nav-point').removeClass('active');
			$('#section-1').addClass('active');
		}
		if($(window).scrollTop() > 700 ) {
			$('.nav-point').removeClass('active');
			$('#section-2').addClass('active');
		}
		if($(window).scrollTop() > 700 ) {
			$('.nav-point').removeClass('active');
			$('#section-3').addClass('active');
		}
		if($(window).scrollTop() > 1000 ) {
			$('.nav-point').removeClass('active');
			$('#section-4').addClass('active');
		}
		if($(window).scrollTop() > 1500 ) {
			$('.nav-point').removeClass('active');
			$('#section-5').addClass('active');
		}
		if($(window).scrollTop() > 2000 ) {
			$('.nav-point').removeClass('active');
			$('#section-6').addClass('active');
		} 
		if($(window).scrollTop() > 2500 ) {
			$('.nav-point').removeClass('active');
			$('#section-7').addClass('active');
		} 
		if($(window).scrollTop() > 3000 ) {
			$('.nav-point').removeClass('active');
			$('#section-8').addClass('active');
		}

	});*/

});
