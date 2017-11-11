$(document).ready(function(){

	$('.main-navi li').click(function(e){
		e.preventDefault();
		$(this).find('ul').toggleClass('active');
	});


	$("#owl-carousel").owlCarousel({
		loop: true,
		nav: true,
		dots: true,
		items: 1,
		autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:true
	});

	$("#single-gallery").owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		items: 1,
		autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		thumbs: true,
    	thumbsPrerendered: true
	});
	$('#-single-gallery-thumbs').owlCarousel({
		loop:true,
		margin:10,
		nav: true,
		dots: false,
		items: 7,
		responsive:{
		    0:{
		        items:3
		    },
		    768:{
		        items:5
		    },
		    992:{
		        items:7
		    }
		}
	})

  	$("#similar-items").owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		items: 4,
		autoplay:false,
		responsive:{
		    0:{
		        items:1
		    },
		    768:{
		        items:3
		    },
		    992:{
		        items:4
		    }
		}
	});

  	$("#listing-ads-slider").owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		items: 3,
		autoplay:false,
		responsive:{
		    0:{
		        items:1
		    },
		    768:{
		        items:2
		    },
		    992:{
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
	/*
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
	*/
		var click2 = 1;

		$("#show-mobile-searchbar").on("click", clickSearchbar);

		function clickSearchbar() {
		    if ( click2 == 1 ) {
		        $(this).addClass('active');
		        $('.mobile-search').slideToggle(300);
		        click2 = 2;
		    } else {
				$(this).removeClass('active');
				$('.mobile-search').hide();
		        click2 = 1;
		    }
		}

	/*$('.image-popup-no-margins').magnificPopup({
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
	});*/

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

	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
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



});

	function getName (str){
	    if (str.lastIndexOf('\\')){
	        var i = str.lastIndexOf('\\')+1;
	    }
	    else{
	        var i = str.lastIndexOf('/')+1;
	    }						
	    var filename = str.slice(i);			
	    var uploaded = document.getElementById("fileformlabel");
	    uploaded.innerHTML = filename;
	}
