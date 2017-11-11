var e_carousel = $('.e-carousel').elastislide({
	minItems : 3
});

$(document).ready(function(){
	if($(window).width() > 1200) {
		$('.objectiv').fadeIn();
		$('.fotik-left').fadeIn();
		$('.stoika').fadeIn();
	}

	$('.left-box-arrow').on('click',function(){
		e_carousel._slide('prev');
	});
	
	$('.right-box-arrow').on('click',function(){
		e_carousel._slide('next');
	});

});