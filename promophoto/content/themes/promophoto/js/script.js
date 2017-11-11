$(document).ready(function(){

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

	$('.to-order-form').on('click',function(){
		var t = $('#m-order-form').offset().top;
		$('html, body').animate({scrollTop:t-30}, 'slow'); 
	})

	$('#header-logo').on('click', function(){
		document.location.href = 'index.html';
	});

	$('.order-form').on('submit',function(){
		var frm = $(this);
		var fio = frm.find('#i-fio');
		var email = frm.find('#i-email');
		var txt = frm.find('#i-txt');
		
		var error = 0;
      	var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;

      	fio.removeClass('err');
      	if($.trim(fio.val()).length <= 1){
			error = 1;
			show_error(fio);
		}

		txt.removeClass('err');
		if($.trim(txt.val()).length <= 5){
			error = 1;
			show_error(txt);
		}

		email.removeClass('err');
		if(!pattern.test(email.val())){
			error = 1;
			show_error(email);
		}

		if(error == 0){
			var data = frm.serialize();
			$.ajax({
            	url: "/send/entry.php",
            	cache: false,
            	type: "POST",
            	dataType: "text",
            	data: data, 
            	success: function(t){
					$('#entry-send-overlay').fadeIn();
               		$('#entry-send-win').fadeIn();
            	}
        	});
		}

		return false;
	});

	$('.entry-close-win').on('click',function(){
		$('#entry-send-win').fadeOut();
		$('#entry-send-overlay').fadeOut();
	});

});

function show_error(e){
	e.addClass('err');
	e.fadeTo(0, 0.5);
	e.fadeTo(1000, 1);
}