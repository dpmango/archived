$(document).ready(function(){
	
	jQuery('.scrollbar-macosx').scrollbar();
	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom',
	  callbacks: {
	    open: function() {
	      $('body').css('overflow', 'hidden');
	    },
	    close: function() {
	      $('body').css('overflow', 'auto');
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
	
	//INITIALIZE
	var video = $('#myVideo');
	
	//remove default control when JS loaded
	video[0].removeAttribute("controls");
	$('.control').fadeIn(500);
	$('.caption').fadeIn(500);
 
	//before everything get started
	video.on('loadedmetadata', function() {
			
		//set video properties
		$('.current').text(timeFormat(0));
		$('.duration').text(timeFormat(video[0].duration));
		updateVolume(0, 0.7);
			
		//start to get video buffering data 
		setTimeout(startBuffer, 150);
			
		//bind video events
		$('.videoContainer')
		.hover(function() {
			$('.control').stop().fadeIn();
			$('.caption').stop().fadeIn();
		}, function() {
			if(!volumeDrag && !timeDrag){
				$('.control').stop().fadeOut();
				$('.caption').stop().fadeOut();
			}
		})
		.on('click', function() {
			$('.btnPlay').find('.icon-play').addClass('icon-pause').removeClass('icon-play');
			$(this).unbind('click');
			video[0].play();
		});
	});
	
	//display video buffering bar
	var startBuffer = function() {
		var currentBuffer = video[0].buffered.end(0);
		var maxduration = video[0].duration;
		var perc = 100 * currentBuffer / maxduration;
		$('.bufferBar').css('width',perc+'%');
			
		if(currentBuffer < maxduration) {
			setTimeout(startBuffer, 500);
		}
	};	
	
	//display current video play time
	video.on('timeupdate', function() {
		var currentPos = video[0].currentTime;
		var maxduration = video[0].duration;
		var perc = 100 * currentPos / maxduration;
		$('.timeBar').css('width',perc+'%');	
		$('.current').text(timeFormat(currentPos));	
	});
	
	//CONTROLS EVENTS
	//video screen and play button clicked
	video.on('click', function() { playpause(); } );
	$('.btnPlay').on('click', function() { playpause(); } );
	var playpause = function() {
		if(video[0].paused || video[0].ended) {
			$('.btnPlay').addClass('paused');
			$('.btnPlay').find('.icon-play').addClass('icon-pause').removeClass('icon-play');
			video[0].play();
		}
		else {
			$('.btnPlay').removeClass('paused');
			$('.btnPlay').find('.icon-pause').removeClass('icon-pause').addClass('icon-play');
			video[0].pause();
		}
	};

	
	//fullscreen button clicked
	$('.btnFS').on('click', function() {
		if($.isFunction(video[0].webkitEnterFullscreen)) {
			video[0].webkitEnterFullscreen();
		}	
		else if ($.isFunction(video[0].mozRequestFullScreen)) {
			video[0].mozRequestFullScreen();
		}
		else {
			alert('Your browsers doesn\'t support fullscreen');
		}
	});
	
	//sound button clicked
	$('.sound').click(function() {
		video[0].muted = !video[0].muted;
		$(this).toggleClass('muted');
		if(video[0].muted) {
			$('.volumeBar').css('width',0);
		}
		else{
			$('.volumeBar').css('width', video[0].volume*100+'%');
		}
	});
	
	//VIDEO EVENTS
	//video canplay event
	video.on('canplay', function() {
		$('.loading').fadeOut(100);
	});
	
	//video canplaythrough event
	//solve Chrome cache issue
	var completeloaded = false;
	video.on('canplaythrough', function() {
		completeloaded = true;
	});
	
	//video ended event
	video.on('ended', function() {
		$('.btnPlay').removeClass('paused');
		video[0].pause();
	});

	//video seeking event
	video.on('seeking', function() {
		//if video fully loaded, ignore loading screen
		if(!completeloaded) { 
			$('.loading').fadeIn(200);
		}	
	});
	
	//video seeked event
	video.on('seeked', function() { });
	
	//video waiting for more data event
	video.on('waiting', function() {
		$('.loading').fadeIn(200);
	});
	
	//VIDEO PROGRESS BAR
	//when video timebar clicked
	var timeDrag = false;	/* check for drag event */
	$('.progress').on('mousedown', function(e) {
		timeDrag = true;
		updatebar(e.pageX);
	});
	$(document).on('mouseup', function(e) {
		if(timeDrag) {
			timeDrag = false;
			updatebar(e.pageX);
		}
	});
	$(document).on('mousemove', function(e) {
		if(timeDrag) {
			updatebar(e.pageX);
		}
	});
	var updatebar = function(x) {
		var progress = $('.progress');
		
		//calculate drag position
		//and update video currenttime
		//as well as progress bar
		var maxduration = video[0].duration;
		var position = x - progress.offset().left;
		var percentage = 100 * position / progress.width();
		if(percentage > 100) {
			percentage = 100;
		}
		if(percentage < 0) {
			percentage = 0;
		}
		$('.timeBar').css('width',percentage+'%');	
		video[0].currentTime = maxduration * percentage / 100;
	};

	//VOLUME BAR
	//volume bar event
	var volumeDrag = false;
	$('.volume').on('mousedown', function(e) {
		volumeDrag = true;
		video[0].muted = false;
		$('.sound').removeClass('muted');
		updateVolume(e.pageX);
	});
	$(document).on('mouseup', function(e) {
		if(volumeDrag) {
			volumeDrag = false;
			updateVolume(e.pageX);
		}
	});
	$(document).on('mousemove', function(e) {
		if(volumeDrag) {
			updateVolume(e.pageX);
		}
	});
	var updateVolume = function(x, vol) {
		var volume = $('.volume');
		var percentage;
		//if only volume have specificed
		//then direct update volume
		if(vol) {
			percentage = vol * 100;
		}
		else {
			var position = x - volume.offset().left;
			percentage = 100 * position / volume.width();
		}
		
		if(percentage > 100) {
			percentage = 100;
		}
		if(percentage < 0) {
			percentage = 0;
		}
		
		//update volume bar and video volume
		$('.volumeBar').css('width',percentage+'%');	
		video[0].volume = percentage / 100;
		
		//change sound icon based on volume
		if(video[0].volume == 0){
			$('.sound').removeClass('sound2').addClass('muted');
		}
		else if(video[0].volume > 0.5){
			$('.sound').removeClass('muted').addClass('sound2');
		}
		else{
			$('.sound').removeClass('muted').removeClass('sound2');
		}
		
	};

	//Time format converter - 00:00
	var timeFormat = function(seconds){
		var m = Math.floor(seconds/60)<10 ? "0"+Math.floor(seconds/60) : Math.floor(seconds/60);
		var s = Math.floor(seconds-(m*60))<10 ? "0"+Math.floor(seconds-(m*60)) : Math.floor(seconds-(m*60));
		return m+":"+s;
	};

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

	$('#s-nav').onePageNav({
	    currentClass: 'active',
	    changeHash: false,
	    scrollSpeed: 750,
	    scrollThreshold: 0.5,
	    filter: '',
	    easing: 'swing',
	    begin: function() {
	        //I get fired when the animation is starting
	    },
	    end: function() {
	        //I get fired when the animation is ending
	    },
	    scrollChange: function($currentListItem) {
	        //I get fired when you enter a section and I pass the list item of the section
	    }
	});

	$('.navigation').css('display', 'none');

	$(window).scroll(function(){
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
	});

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
