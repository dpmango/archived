$(document).ready(function(){

	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:false,
	    dots: true,
	    items: 1
	})

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

	$("#show-more-text").click(function(){
    	$('#text-change').text(function(i, text){
    		return text === "Read more" ? "Read Less" : "Read More";
    	});
    	$('.fadeout').toggleClass('active');
    	$('.ico-more').toggleClass('active');
		$('.hidden-text').slideToggle(300);
	});

	$("#show-more-popular-essays").click(function(){
    	$(this).text(function(i, text){
    		return text === "Show More" ? "Show Less" : "Show More";
    	});
		$('#more-popular-essays').slideToggle(300);
	});

	$("#show-more-recent-essays").click(function(){
    	$(this).text(function(i, text){
    		return text === "Show More" ? "Show Less" : "Show More";
    	});
		$('#more-recent-essays').slideToggle(300);
	});

	$("#show-more-most-popular-essays").click(function(){
    	$(this).text(function(i, text){
    		return text === "Show More" ? "Show Less" : "Show More";
    	});
		$('#more-most-popular-essays').slideToggle(300);
	});

	$("#show-more-free-essays").click(function(){
    	$(this).text(function(i, text){
    		return text === "Show More" ? "Show Less" : "Show More";
    	});
		$('#more-free-essays').slideToggle(300);
	});

 	// Prevent # errors
	$('[href="#"]').click(function (e) {
		e.preventDefault();
	});

	$('a[href^="#section"]').click(function(){
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top}, 1000);
        return false; 
	});


});