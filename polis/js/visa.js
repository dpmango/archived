$(document).ready(function(){

	// ТАБЫ на 2-ом шаге
	$('.visa__tabs').on('click', '.visa__tab:not(.active)', function() {
		$(this).addClass('active').siblings().removeClass('active')
		.closest('.row').find('.visa2__wrap').removeClass('active').eq($(this).index()).addClass('active');
	});

	/////////
	// Выпадашки на действия
	/////////

	// Если есть девячья фамилия
	$('.togable-maden-name').on('click', function(){
		var val = $(this).find('input').val();

		if (val == "Нет"){
			$(this).closest('.visa2__wrap').find('.toggle-maden-name').fadeOut('600');
		} else if (val == "Да"){
			$(this).closest('.visa2__wrap').find('.toggle-maden-name').fadeIn('600');
		}
	});

	// Показываем в зависимости от занятости 
	$('.togable-occupation .calculator__form__dropdown__custom-select li').on('click', function(){
		var val = $(this).closest('.calculator__form__input').find('input').val();

		if (val == "Работаю"){
			$(this).closest('.visa2__wrap').find('.toggle-occupation-work').fadeIn('600');
			$(this).closest('.visa2__wrap').find('.toggle-occupation-school').fadeOut('600');
			$(this).closest('.togable-occupation').removeClass('calculator__form__input--ico-school');
		} else if (val == "Учусь в ВУЗе" || val == "Учусь в школе"){
			$(this).closest('.visa2__wrap').find('.toggle-occupation-school').fadeIn('600');
			$(this).closest('.visa2__wrap').find('.toggle-occupation-work').fadeOut('600');
			$(this).closest('.togable-occupation').addClass('calculator__form__input--ico-school');
		} else {
			$(this).closest('.visa2__wrap').find('.toggle-occupation-work').fadeOut('600');
			$(this).closest('.visa2__wrap').find('.toggle-occupation-school').fadeOut('600');
		}
	});

	// Если получал визу
	$('.togable-have-schengen').on('click', function(){
		var val = $(this).find('input').val();

		if (val == "Нет"){
			$(this).closest('.visa2__wrap').find('.toggle-have-schengen').fadeOut('600');
		} else if (val == "Да"){
			$(this).closest('.visa2__wrap').find('.toggle-have-schengen').fadeIn('600');
		}
	});

	// и накидываем datarange на селект
	// вызов в main.js чтобы не засорять повторным вызовом локаля


	// ТРЕТЬИЙ ШАГ (доставка)
	$('.visa3-delivery input[name=delivery_type]').on('change', function(){

		if ( $('#delivery_type_1').is(':checked') ){
			console.log('Выбран доставкой по СБП');
			$('.togle-visaDelivery--type2').hide();
			$('.togle-visaDelivery--type3').hide();
			$('.togle-visaDelivery--type4').hide();
			$('.togle-visaDelivery--type1').fadeIn('600');
		} else if ( $('#delivery_type_2').is(':checked') ) {
			$('.togle-visaDelivery--type1').hide();
			$('.togle-visaDelivery--type3').hide();
			$('.togle-visaDelivery--type4').hide();
			$('.togle-visaDelivery--type2').fadeIn('600');
		} else if ( $('#delivery_type_3').is(':checked') ) {
			$('.togle-visaDelivery--type1').hide();
			$('.togle-visaDelivery--type2').hide();
			$('.togle-visaDelivery--type4').hide();
			$('.togle-visaDelivery--type3').fadeIn('600');
		} else if ( ( $('#delivery_type_4').is(':checked') ) ) {
			$('.togle-visaDelivery--type1').hide();
			$('.togle-visaDelivery--type2').hide();
			$('.togle-visaDelivery--type3').hide();
			$('.togle-visaDelivery--type4').fadeIn('600');
		}
	});
	
});