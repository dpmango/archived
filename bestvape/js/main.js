$(document).ready(function(){

	$('.slider').owlCarousel({
		items : 1,
		nav : true,
		dots : true,
		autoPlay : true,
		autoPlayTimeout : 7000,
		loop : true,
		navText : ["", ""],
		responsiveRefreshRate : 0,
		animateIn : 'fadeIn',
		animateOut : 'fadeOut'
	});
	
	$('.carousel').owlCarousel({
		items: 5,
		nav: true,
		dots: false,
		autoPlay: true,
		autoplayTimeout: 5000,
		loop: true,
		navText: ["", ""],
		responsiveRefreshRate: 1,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
		responsive : {
		    0 : {
		        items : 2
		    },
		    768 : {
		        items : 5
		    }
		}
	});
	
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
	
	$('.topLvl').find('.exp').click(function(){
		$(this).parent().find('ul').slideToggle('middle');
		$(this).toggleClass('opened');
	});
	$('.navi').click(function(){
		$('.Mobilemenu').slideToggle();
		$(this).toggleClass('active');
	});
	$('ul.tabs').on('click', 'li:not(.active)', function() {
		$(this).addClass('active').siblings().removeClass('active')
			
		$('.tabsContent').find('.box').eq($(this).index()).fadeIn(150).siblings('.box').hide();
	})

	$('ul.tabsSelect').on('click', 'li:not(.active)', function() {
		$(this).addClass('active').siblings().removeClass('active')
			
		$('.tabsItemContent').find('.boxItem').eq($(this).index()).fadeIn(150).siblings('.boxItem').hide();
	})
	
		
	$('.minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.plus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});
	
	$.sortChange = function() {
		$("#sortForm").submit();
		return false;
	}		
	
	//кнопка наверх 
	$("#back-top").hide();
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});
		
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
	
	$('[href="#"]').click(function (e) {
		e.preventDefault();
	});
});
