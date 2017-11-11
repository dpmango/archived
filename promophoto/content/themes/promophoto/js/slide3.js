var this_ee_slide = 1;

var e_carousel = $('.e-carousel').elastislide({
	minItems: 3
});


$(document).ready(function(){
	
	$('.left-box-arrow').on('click',function(){
		if(this_ee_slide > 1) this_ee_slide -= 1;
		else this_ee_slide = ee_slides;
		change_ee_slide();
	});
	
	$('.right-box-arrow').on('click',function(){
		if(this_ee_slide < ee_slides) this_ee_slide += 1;
		else this_ee_slide = 1;
		change_ee_slide();
	});

});

function change_ee_slide(){
	$('.ee-slide').fadeOut();
	$('.ee-slide-'+this_ee_slide).fadeIn();
}
