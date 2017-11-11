$(document).ready(function(){
	$('.form__container__input label').click(function(event){
	    $(this).parent('.form__container__input').find('input').focus();
	    $(this).parent('.form__container__input').find('textarea').focus();
	});
	
	$("input[name=phone]").mask("+7 (999) 999-9999");
	$("input[name=phone2]").mask("+7 (999) 999-9999");
	$("input[name=passport]").mask("99 99 99999999");
	$("input[name=year]").mask("9999");
	
	$.mask.definitions['~'] = '[А-Яа-яЁё]';
	$("input[name=car-reg-num]").mask("~ 999 ~~", {autoclear: false});

    $('.calculator__form__input__car-reg-num__drop__wrap li a').click(function(){
    	var val = $(this).data('value');
    	$('#selected-car-reg-region').text(val);
    	$('#car-reg-region').text(val);
    });


	var car_models = [];
	var car_makes = [];


	$.getJSON('data/marks_json.json', function (data) {
		$.each( data, function( index_main, model ) {
			car_makes.push(index_main);
		});

		$('#calc__green__car-make__input').autocomplete({
		    lookup: car_makes,
		    onSelect: function (suggestion) {
		    	$('#calc__green__car-make__input').val(suggestion.value);
		    }
		});
	});

	function get_current_models(input){
		$.getJSON('data/marks_json.json', function (data) {
			$.each( data, function( index_main, model ) {
				if (input == index_main){
					$.each( model, function( key, val ){
						car_models.push(val);
						console.log(car_models);
					});
				}
			});
			$('#calc__green__car-model__input').autocomplete({
			    lookup: car_models,
			    onSelect: function (suggestion) {
			    	$('#calc__green__car-model__input').val(suggestion.value);
			    	$('#calc__green__car-model').val(suggestion.value);
			    }
			});
		});
	}

	// Выбор марки
    $('#calc__green__car-make').click(function(e){
    	$(this).toggleClass('active');
    	$('#calc__green__car-make__selector').toggleClass('active');
    	e.stopPropagation();
    });

    // подставляет значение марки
    $('.calculator__form__dropdown__help a').click(function(e){
    	var get_val = $(this).data('value');
    	$('#calc__green__car-make__input').val(get_val);
    	var val = $(this).data('value');
		$('#calc__green__car-make').val(val);
		car_makes = []; // обнуляем массив
		get_current_models(val);
		$('#calc__green__car-model').attr("placeholder", "Выберите модель " + val);
		e.stopPropagation();
    });

    $('#calc__green__car-make__input').click(function(e){
    	e.stopPropagation();
    });

	$('#calc__green__car-make__input').keydown(function (e){
	    if(e.keyCode == 13){
	    	var val = $(this).val();
			$('#calc__green__car-make').val(val);
			car_makes = []; // обнуляем массив
			get_current_models(val);
			$('#calc__green__car-model').attr("placeholder", "Выберите модель " + val);
			e.stopPropagation();
	    }
	})


	$('#calc__green__car-make__input').autocomplete({
	    lookup: car_makes,
	    onSelect: function (suggestion) {
	    	$('#calc__green__car-make__input').val(suggestion.value);
			car_makes = []; // обнуляем массив
			get_current_models(suggestion.value);
			$('#calc__green__car-model').attr("placeholder", "Выберите модель " + suggestion.value);
	    }
	});

	// Выбор модели
    $('#calc__green__car-model').click(function(e){
    	$(this).toggleClass('active');
    	$('#calc__green__car-model__selector').toggleClass('active');
    	e.stopPropagation();
    });

    $('#calc__green__car-model__input').click(function(e){
    	e.stopPropagation();
    });

	$('#calc__green__car-model__input').keydown(function (e){
	    if(e.keyCode == 13){
	    	var val = $(this).val();
			$('#calc__green__car-model').val(val);
			e.stopPropagation();
	    }
	})

	$('#calc__green__car-model__input').autocomplete({
	    lookup: car_models,
	    onSelect: function (suggestion) {
	    	$('#calc__green__car-model__input').val(suggestion.value);
			$('#calc__green__car-model').val(suggestion.value);
	    }
	});

	// чекбоксы

	$('.radio-buttons__btn').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});

	//выбор доставки
	$('#choice-delivery input').on('change', function(){
    	if ($('#delivery_method_1').is(':checked')) {
    		$('#delivery-offices').slideUp();
    		$('#delivery-self').slideDown();
    	} else if($('#delivery_method_2').is(':checked')) {
    		$('#delivery-offices').slideDown();
    		$('#delivery-self').slideUp();
    	}
	});

	$('.calculator__form__single-switch').click(function(){
		$(this).toggleClass('active');
		$(this).find('.yes').toggle();
		$(this).find('.no').toggle();
		if ($(this).is(':not(.active)')){
			var current_val = $(this).find('.yes').text();
			$(this).find('input[type=hidden]').val(current_val);
		} else {
			var current_val = $(this).find('.no').text();
			$(this).find('input[type=hidden]').val(current_val);

		}

	});


});
