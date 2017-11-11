$(document).ready(function(){

	$('.jClever').jClever({
			selfClass: 'default',
			autoTracking: true,
			autoInit: true,
            applyTo: {
            	select: true, 
            	radio: true,
            	checkbox: true,
            	file: true
            }
		});
});