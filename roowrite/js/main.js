$(document).ready(function(){

	// Testimonials carousel
 	$('#carousel-testimonials').owlCarousel({
		items: 1,
		nav: false,
		dots: true,
		autoPlay: true,
		autoplayTimeout: 5000,
		loop: true,
		navText: ["", ""],
		responsiveRefreshRate: 1,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut'
	});

 	$('#carousel-links').owlCarousel({
		items: 3,
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
		        items : 1
		    },
		    480 : {
		    	items : 2
		    },
		    768 : {
		        items : 3
		    },
		    992 : {
		        items : 3
		    }
		}
	});

 	// Fixed header 
	$(window).scroll(function(){
		if($(window).scrollTop() > 500 ){
			$('#float-me').addClass('floating');
		} else {
			$('#float-me').removeClass('floating');
		}
		if($(window).scrollTop() > 0 ){
			$('#float-me-inner').addClass('floating');
		} else {
			$('#float-me-inner').removeClass('floating');
		}
	});

	// Flat UI Kit
	$("select").select2({dropdownCssClass: 'dropdown-inverse'});
	$(':radio').radiocheck();
	$(':checkbox').radiocheck('check');

 	// Prevent # errors
	$('[href="#"]').click(function (e) {
		e.preventDefault();
	});

	$('.form-delivery .btn').click(function (e) {
		e.preventDefault();
	});

	// mobile menu
	$('.mobile-menu').click(function(){
		$(this).toggleClass('active');
		$('.menu-xs').toggleClass('active');
	});

	// Get datetime for checkout
	function changeDate() {
		var choosen_date = $('#checkout-date').val();
		var dateInt = parseInt(choosen_date);

		var monthNames = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];
		var timeNames = ["1:00 am", "2:00 am", "3:00 am", "4:00 am", "5:00 am", "6:00 am", "7:00 am", "8:00 am", "9:00 am", "10:00 am", "11:00 am", "12:00 am", "1:00 pm", "2:00 pm", "3:00 pm", "4:00 pm", "5:00 pm", "6:00 pm", "7:00 pm", "8:00 pm", "9:00 pm", "10:00 pm", "11:00 pm", "12:00 pm"];
		var date = new Date();
		date.setDate(date.getDate() + dateInt);

		var month = monthNames[date.getMonth()];
		var day = date.getDate();
		var time = timeNames[date.getHours()];

		var output = (day<10 ? '0' : '') + day + ' ' + month + ' ' + time;

		$('.form-delivery .btn-info').text(output);
	}

	changeDate();

	$('#checkout-date').change(function() {
		changeDate();
	});


});
