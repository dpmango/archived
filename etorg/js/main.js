$(document).ready(function(){

    ymaps.ready(init);
    var myMap;

    function init(){     
        myMap = new ymaps.Map("yandex-map", {
            center: [55.76, 37.64],
            zoom: 10
        });
        myMap.controls.remove('geolocationControl');
        myMap.controls.remove('searchControl');
        myMap.controls.remove('routeEditor');
        myMap.controls.remove('trafficControl');
        myMap.controls.remove('typeSelector');
        myMap.controls.remove('fullscreenControl');
        myMap.controls.remove('rulerControl');
    }


	$('.other-esp').click(function (){
		$('.other-esp-content').slideToggle('300');
		$(this).toggleClass('active');
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
	
	// Testimonials carousel
 	$('#carousel-testimonials').owlCarousel({
		items: 1,
		nav: true,
		dots: true,
		autoPlay: true,
		autoplayTimeout: 5000,
		loop: true,
		navText: ["", ""],
		responsiveRefreshRate: 1,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut'
	});

 	// Fixed header 
	/*$(window).scroll(function(){
		if($(window).scrollTop() > 720 ){
			$('#float-me').addClass('floating');
		} else {
			$('#float-me').removeClass('floating');
		}
	});*/

	// Flat UI Kit
	$("select").select2({dropdownCssClass: 'dropdown-inverse'});
	$(':radio').radiocheck();
	$(':checkbox').radiocheck('check');

 	// Prevent # errors
	/*$('[href="#"]').click(function (e) {
		e.preventDefault();
	});

	$('a[href^="#"]').click(function(){
	        var el = $(this).attr('href');
	        $('body').animate({
	            scrollTop: $(el).offset().top}, 2000);
	        return false; 
	});*/

	// mobile menu
	$('.mobile-menu').click(function(){
		$(this).toggleClass('active');
		$('.menu-xs').toggleClass('active');
	});


});
