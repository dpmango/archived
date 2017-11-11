$(document).ready(function(){

	$("#owl-carousel-1").owlCarousel({
		loop: true,
		nav: true,
		dots: true,
		items: 1,
		autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:true
	});

	function getSliders(){
		$("#owl-carousel-2").owlCarousel({
			loop: false,
			nav: false,
			dots: true,
			items: 1,
			stagePadding: 60,
			autoplay:true,
			autoplayTimeout:5000,
			autoplayHoverPause:true
		});
		$("#owl-carousel-3").owlCarousel({
			loop: true,
			nav: false,
			dots: true,
			items: 1,
			autoplay:true,
			autoplayTimeout:5000,
			autoplayHoverPause:true
		});
		$("#owl-carousel-4").owlCarousel({
			loop: true,
			nav: false,
			dots: true,
			items: 2,
			autoplay:true,
			autoplayTimeout:5000,
			autoplayHoverPause:true
		});
	};
	if(window.innerWidth < 768 ){
		getSliders();
	}

	$(window).resize(function(){
		if(window.innerWidth < 768 ){
			getSliders();
		}
	});

	var click = 1;

	$("#show-me-menu").on("click", clickHamb);

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

	$('.plusminus .plus, .plusminus .minus').click(function(){
		var oldVal = parseInt($(this).closest('.plusminus').find('input').val());
		if ( isNaN(oldVal) ) {
			oldVal = 1;
		} else {
			if( $(this).is('.plus') ) {
				oldVal++;
			} else if ( $(this).is('.minus') ) {
				oldVal--;
			}
		}
		if (oldVal < 1) {
			oldVal = 1;
		}
		$(this).closest('.plusminus').find('input').val(oldVal);
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


	$("#slider").slider({
	    min: 40000,
	    max: 69000,
	    values: [40000,69000],
	    range: true,
	    stop: function(event, ui) {
	        $("input#minCost").val($("#slider").slider("values",0));
	        $("input#maxCost").val($("#slider").slider("values",1));
	    },
	    slide: function(event, ui){
	        $("input#minCost").val($("#slider").slider("values",0));
	        $("input#maxCost").val($("#slider").slider("values",1));
	    }
	});
	$("input#minCost").change(function(){
	    var value1=$("input#minCost").val();
	    var value2=$("input#maxCost").val();
	    if(parseInt(value1) > parseInt(value2)){
	        value1 = value2;
	        $("input#minCost").val(value1);
	    }
	    $("#slider").slider("values",0,value1);    
	});
	$("input#maxCost").change(function(){
	    var value1=$("input#minCost").val();
	    var value2=$("input#maxCost").val();
	    if (value2 > 1000) { value2 = 1000; $("input#maxCost").val(1000)}

	    if(parseInt(value1) > parseInt(value2)){
	        value2 = value1;
	        $("input#maxCost").val(value2);
	    }
	    $("#slider").slider("values",1,value2);
	});




});
