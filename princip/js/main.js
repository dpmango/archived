$(document).ready(function(){

	$('ul.select').on('click', 'li:not(.active)', function() {
		$(this).addClass('active').siblings().removeClass('active')
			
		$('.tabsContent').find('.box').eq($(this).index()).fadeIn(150).siblings('.box').hide();
	})
	
	$('[href="#"]').click(function (e) {
		e.preventDefault();
	});
});
