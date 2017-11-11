$(document).ready(function(){
	$('.floating-btn').click(function(){
		$('.floating-btn').addClass("hide").animate(500);
		$('.news-toggable').addClass("active").animate(500);
	});
	$('.floating-btn--right').click(function(){
		$('.floating-btn').removeClass("hide").animate(500);
		$('.news-toggable').removeClass("active").animate(500);
	});

	$('.navi-btn').click(function(){
		$('.navi-btn').toggleClass("active");
		$(".menu-navi").toggleClass("active").animate(500);
	});
 	// Prevent # errors
	$('[href="#"]').click(function (e) {
		e.preventDefault();
	});


});
