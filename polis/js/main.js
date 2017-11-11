$(document).ready(function(){

	var helper_click = 1
	// вызов помошника
	$('#helper--toggle').click(function(e){
		if (helper_click == 1) {
			$('#show-helper, #helper__step-1').show();
			$('.calculator__wrapper, header').addClass('need-help');
			$('#calc__select-location--toggle').trigger('click');
			helper_click++
		} else {
			$('#show-helper, #helper__step-1').hide();
			$('.calculator__wrapper, header').removeClass('need-help');
			helper_click--
		}
	});

	$('#close-helper').click(function(e){
		$('#show-helper').hide();
		$('#helper__step-1').hide();
		$('.calculator__wrapper').removeClass('need-help');
		$('header').removeClass('need-help');
	});

    ////////
    // Обработчики формы ВЗР - ШАГ 1
    ////////
    $('#calc__select-location--toggle').click(function(e){
    	$(this).toggleClass('active');
    	$('#calc__select-location').toggleClass('active');
    	e.stopPropagation();
    });

    // подставляет значение страны
    $('.calculator__form__dropdown__help a').click(function(e){
    	var get_val = $(this).data('value');
    	console.log(get_val);
    	$('#calc__select-location__input').val(get_val);
    	e.stopPropagation();
    });

    $('#calc__select-location__input').click(function(e){
    	e.stopPropagation();
    });

	$('#calc__select-location__input').keydown(function (e){
	    if(e.keyCode == 13){
	    	var val = $(this).val();
			$('#calc__select-location--toggle input').val(val);
	    }
	})


	$('#calc__select-location__input').autocomplete({
	    lookup: countries,
	    onSelect: function (suggestion) {
	    	$('#calc__select-location--toggle input').val(suggestion.value);
	    }
	});

    $('#calc__select-startdate').click(function(e){
    	$(this).toggleClass('active');
    	$('#calc__drop__select-startdate').toggleClass('active');
    	e.stopPropagation();
    });

    $('#calc__select-enddate').click(function(e){
    	$(this).toggleClass('active');
    	$('#calc__drop__select-enddate').toggleClass('active');
    	e.stopPropagation();
    });

    // вызов datepicker

    // но сначала узнаем что сегодня за день
	var currentDate = new Date();

	var currentMonth = currentDate.getMonth()+1;
	var currentDay = currentDate.getDate();
	var currentYear = currentDate.getFullYear();

	var currentDateFormated = currentMonth.toString() + '/' + currentDay.toString() + '/' + currentYear.toString()
	
	var daterangepicker_locale = {
	        "format": "DD.MM.YYYY",
	        "separator": " - ",
	        "applyLabel": "Применить",
	        "cancelLabel": "Отменить",
	        "fromLabel": "От",
	        "toLabel": "До",
	        "customRangeLabel": "Custom",
	        "weekLabel": "W",
	        "daysOfWeek": [
	            "Вс",
	            "Пн",
	            "Вт",
	            "Ср",
	            "Чт",
	            "Пт",
	            "Сб"
	        ],
	        "monthNames": [
	            "Январь",
	            "Февраль",
	            "Март",
	            "Апрель",
	            "Май",
	            "Июнь",
	            "Июль",
	            "Август",
	            "Сентябрь",
	            "Октбрь",
	            "Ноябрь",
	            "Декабрь"
	        ],
	        "firstDay": 1
	}

	// начальная 
	$('#calc__select-startdate, #calc__select-enddate').daterangepicker({
	    "showWeekNumbers": false,
	    "singleDatePicker": true,
	    "showCustomRangeLabel": false,
	    "autoApply": true,
	    "startDate": new Date(),
	    "endDate": "10/13/2016",
	    "opens": "right",
	    "locale": daterangepicker_locale
	}, function(start, end, label) {
		$('#calc__select-startdate input').val(start.format('DD.MM.YYYY'));
		// console.log("New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')");
	});

	// конечная
	$('#calc__select-enddate').daterangepicker({
	    "showWeekNumbers": false,
	    "singleDatePicker": true,
	    "showCustomRangeLabel": false,
	    "autoApply": true,
	    "startDate": new Date(),
	    "endDate": "10/13/2016",
	    "opens": "right",
	    "locale": daterangepicker_locale
	}, function(start, end, label) {
		$('#calc__select-enddate input').val(start.format('DD.MM.YYYY'));
	 	// console.log("New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')");
	});

	// дата рождения
	$('#calc__select-birthdate').daterangepicker({
	    "showWeekNumbers": false,
	    "singleDatePicker": true,
	    "showCustomRangeLabel": false,
	    "showDropdowns": true,
	    "autoApply": true,
	    "startDate": "01/01/1970",
	    "endDate": "10/13/2016",
	    "opens": "right",
	    "locale": daterangepicker_locale
	}, function(start, end, label) {
	  console.log("New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')");
	});
	$('#calc__select-birthdate').val();
	$('.calc__select-birthdate').val();

	$('.calc__select-birthdate').daterangepicker({
	    "showWeekNumbers": false,
	    "singleDatePicker": true,
	    "showCustomRangeLabel": false,
	    "showDropdowns": true,
	    "autoApply": true,
	    "startDate": "01/01/1970",
	    "endDate": "10/13/2016",
	    "opens": "right",
	    "locale": daterangepicker_locale
	}, function(start, end, label) {
	  console.log("New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')");
	});
	// день доставки
	$('#calc__select-delivery-date').daterangepicker({
	    "showWeekNumbers": false,
	    "singleDatePicker": true,
	    "showCustomRangeLabel": false,
	    "showDropdowns": false,
	    "autoApply": true,
	    "startDate": new Date(),
	    "endDate": "10/13/2016",
	    "opens": "right",
	    "locale": daterangepicker_locale
	}, function(start, end, label) {
	  console.log("New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')");
	});

	// дата и время (посещение ВЦ)
	$('#calc__select-date-and-time').daterangepicker({
	    "showWeekNumbers": false,
	    "timePicker": true,
	    "timePickerIncrement": 30,
	    "singleDatePicker": true,
	    "showCustomRangeLabel": false,
	    "showDropdowns": false,
	    "autoApply": true,
	    "startDate": new Date(),
	    "endDate": "10/13/2016",
	    "opens": "right",
	    "locale": daterangepicker_locale
	}, function(start, end, label) {
		$('#calc__select-date-and-time input').val(start.format('DD.MM.YYYY  hh.mm A'));
	  	console.log("New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')");
	});

	// когда получал визу
	$('#calc__select-schengen-date').daterangepicker({
	    "showWeekNumbers": false,
	    "singleDatePicker": false,
	    "showCustomRangeLabel": false,
	    "showDropdowns": false,
	    "autoApply": true,
	    "startDate": new Date(),
	    "endDate": new Date(),
	    "opens": "right",
	    "locale": daterangepicker_locale
	}, function(start, end, label) {
	  console.log("New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')");
	});

	// Выбор с пустыми 
	$('.calc__select-blank-placeholder').daterangepicker({
	    "showWeekNumbers": false,
	    "singleDatePicker": true,
	    "showCustomRangeLabel": false,
	    "showDropdowns": true,
	    "autoApply": true,
	    "startDate": new Date(),
	    "endDate": "10/13/2016",
	    "opens": "right",
	    "locale": daterangepicker_locale
	}, function(start, end, label) {
	  console.log("New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')");
	});
	$('.calc__select-blank-placeholder').val('');


	// дроп(даун :*) на программу
    $('#calc__select-program--toggle').click(function(e){
    	$(this).toggleClass('active');
    	$('#calc__select-program').toggleClass('active');
    	e.stopPropagation();
    });

    $('#program__sport').on('change', function() {
    	if ($('#program__sport').attr("checked") != 'checked') {
    		$('#calc__select-program-show').val('Спорт');
    	} else {
    		
    	}
    });

    $('#program__extrime-sport').on('change', function() {
    	if ($('#program__extrime-sport').attr("checked") != 'checked') {
    		$('#calc__select-program-show').val('Экстримальный Спорт');
    	} else {

    	}
    });

    $('#program__driving').on('change', function() {
    	if ($('#program__driving').attr("checked") != 'checked') {
    		$('#calc__select-program-show').val('Управление мопедом');
    	} else {
    		
    	}
    });

    // дроп(даун :*) на дату
	$('#calc__select-timeframe--toggle').click(function(e){
    	$(this).toggleClass('active');
    	$('#calc__select-datetype').toggleClass('active');
		e.stopPropagation();
	});

	// $('.calculator__form__dropdown__custom-select li').click(function(e){
 //    	var get_val = $(this).data('value');
 //    	$('#calc__select-datetime__input').val(get_val + " дней");
 //    	// прячем сразу при выборе
 //    	$('#calc__select-timeframe--toggle').removeClass('active');
 //    	$('#calc__select-datetype').removeClass('active');
	// 	e.stopPropagation();
	// });

	$('#calc__select-timeframe--toggle--single').hide();

	$('label[for="calc__form__datetype__single"]').click(function(e){
		$('#calc__select-timeframe--toggle').hide();
		$('#calc__select-timeframe--toggle--single').show();
	});
	$('label[for="calc__form__datetype__multi"]').click(function(e){
		$('#calc__select-timeframe--toggle').show();
		$('#calc__select-timeframe--toggle--single').hide();
	});


	// я симулянт-валиадатор

	var validator_click = 1

	$('#simulate-validation').click(function(e){
		if (helper_click == 1) {
			$('#calc__select-location--toggle').tooltip('show')
			helper_click++
		} else {
			$('#calc__select-location--toggle').tooltip('destroy')
			helper_click--
		}

		$('#calc__select-location--toggle').toggleClass('not-valid');
    	$(this).text(function(i, text){
    		return text === "Симуляция ошибки валидатора" ? "Ясно, понятно" : "Симуляция ошибки валидатора";
    	});
	});


	// тригер на промокод
	$('#have-promo-trigger').click(function(e){
		$(this).toggleClass('active');
    	$(this).text(function(i, text){
    		return text === "У вас есть промокод?" ? "Ой, у меня его нет" : "У вас есть промокод?";
    	});
		$('#have-promo').slideToggle();
	});

        // var form = $('.combine').not('#Voltes5');
        // var vals = form.map(function () {
        //     var value = $.trim(this.value)
        //     return value ? value : undefined;
        // }).get();
        // $('#Voltes5').val(vals.join(', '))


	// обнулялка классов при клике из области

	function outsiteClick(){
		$('#calc__select-location--toggle').removeClass('active');
    	$('#calc__select-location').removeClass('active');

    	$('#calc__select-startdate').removeClass('active');
    	$('#calc__drop__select-startdate').removeClass('active');

    	$('#calc__select-enddate').removeClass('active');
    	$('#calc__drop__select-enddate').removeClass('active');

    	$('#calc__select-program--toggle').removeClass('active');
    	$('#calc__select-program').removeClass('active');

		$('#calc__select-timeframe--toggle').removeClass('active');
    	$('#calc__select-datetype').removeClass('active');
	};

    $(window).click(function(){
    	// outsiteClick();
    });

	$(document).mouseup(function (e) {
	    var container = new Array();
	    container.push($('#calc__select-location--toggle'));
	    container.push($('#calc__select-location'));
	    container.push($('#calc__select-startdate'));
	    container.push($('#calc__drop__select-startdate'));
	    container.push($('#calc__select-enddate'));
	    container.push($('#calc__drop__select-enddate'));
	    container.push($('#calc__select-program--toggle'));
	    container.push($('#calc__select-program'));
	    container.push($('#calc__select-timeframe--toggle'));
	    container.push($('#calc__select-datetype'));
	    container.push($('.toggable-list-dropdown'));
	    container.push($('.calculator__form__dropdown'));
	    container.push($('#calc__green__car-make'));
	    container.push($('#calc__green__car-model'));
	    container.push($('#calc__green__car-model__selector'));
	    container.push($('#calc__green__car-make__selector'));


	    $.each(container, function(key, value) {
	        if (!$(value).is(e.target) && $(value).has(e.target).length === 0) {
	            $(value).removeClass('active');
	        }
	    });
    });


	// плюс минус
	$('.number-input-plus, .number-input-minus').click(function(){
		var oldVal = parseInt($(this).closest('.calculator__form__dropdown__number-input').find('input').val());
		if ( isNaN(oldVal) ) {
			oldVal = 1;
		} else {
			if( $(this).is('.number-input-plus') ) {
				oldVal++;
			} else if ( $(this).is('.number-input-minus') ) {
				oldVal--;
			}
		}
		if (oldVal < 1) {
			oldVal = 1;
		}
		$(this).closest('.calculator__form__dropdown__number-input').find('input').val(oldVal);
	});

	//$('#calc__form__step1').hide();
	$('#calc__form__step2').hide();
	$('#calc__form__step2__self').hide();
	$('#calc__form__step3').hide();

	$('#calc__form__submit--step1').click(function(e){
		e.preventDefault();
		$('#calc__form__step1').hide();
		$('#calc__form__step2').show();
		$('#calc__form__step3').hide();
		$('#trigger-move-to-calc').trigger('click'); // переход к якорю
		$('.calculator__wrapper').addClass('step--2');
	});

	// это для осаго
	$('#calc__form__submit--step1--osago').click(function(e){
		e.preventDefault();
		if ( $('#car_input_method_1').is(':checked') ) {
			$('#calc__form__step1').hide();
			$('#calc__form__step2').show();
			$('#calc__form__step3').hide();
			$('#trigger-move-to-calc').trigger('click'); // переход к якорю
			$('.calculator__wrapper').addClass('step--2');
		} else if ( $('#car_input_method_2').is(':checked') ) {
			alert('Отлично Мы вам позвоним !')
			// тут отправка и редирект логика
		} else if ( $('#car_input_method_3').is(':checked') ) {
			$('#calc__form__step1').hide();
			$('#calc__form__step2__self').show();
			$('#calc__form__step3').hide();
			$('#trigger-move-to-calc').trigger('click'); // переход к якорю
			$('.calculator__wrapper').addClass('step--2');
		}

	});

	$('.btn--insurance-card').click(function(e){
		e.preventDefault();
		$('#calc__form__step1').hide();
		$('#calc__form__step2').hide();
		$('#calc__form__step3').show();
		$('.calculator__wrapper').addClass('step--3');
		$('#trigger-move-to-calc--step3').trigger('click'); // переход к якорю
	});
	
	$('#calc__form__submit--step2').click(function(e){
		e.preventDefault();
		$('#calc__form__step1').hide();
		$('#calc__form__step2').hide();
		$('#calc__form__step3').show();
		$('.calculator__wrapper').addClass('step--3');
		$('#trigger-move-to-calc--step3').trigger('click'); // переход к якорю
	});


	$('#calc__go-to__prev-step').click(function(e){
		e.preventDefault();
		$('#calc__form__step3').hide();
		$('#calc__form__step1').hide();
		$('#calc__form__step2').show();
	 	$('#trigger-move-to-calc').trigger('click'); // переход к якорю
	 	$('.calculator__wrapper').addClass('step--2');
	});

	///////////////
	/// Обработчики
	// STEP 2
	///////////////

	// табы
	$('.calculator__form__insurance__left__tabs').on('click', 'li:not(.active)', function() {
		$(this).addClass('active').siblings().removeClass('active')
		.closest('div.calculator__form__insurance').find('div.calculator__form__insurance__tabs').removeClass('active').eq($(this).index()).addClass('active');
	});

	$('.calculator__form__insurance__left__multi__list li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});

	// Быстрое редактирование

	$('.calc__form__toggle-fast-edit').click(function(){
		$(this).hide();
		$(this).parent('.calculator__form__editable-step__wrapper').find('.calculator__form__editable-step__field__editable').toggle();
	});

	$('.calculator__form__editable-step__field__editable').keydown(function (e){
	    if(e.keyCode == 13){
	    	// ajax request here 
			$(this).parent('.calculator__form__editable-step__wrapper').find('.calc__form__toggle-fast-edit').show();
			$(this).parent('.calculator__form__editable-step__wrapper').find('.calculator__form__editable-step__field__editable').hide();
	    }
	})


	///////////////
	/// Обработчики
	// STEP 3
	///////////////
	$('#calc__contacts_send_by_post').click(function(){
		$('#calc__contacts_send_by_post--toggleble').slideToggle();
	});



	///////////////
	/// Зеленая карта
	// STEP 1
	///////////////
    // общий дродаун
	$('.toggable-list-dropdown').click(function(e){
    	$(this).toggleClass('active').find('.calculator__form__dropdown').toggleClass('active');
		e.stopPropagation();
	});

	$('.calculator__form__dropdown__custom-select li').click(function(e){
    	var get_val = $(this).data('value');
    	$(this).parents('.toggable-list-dropdown').find('input').val(get_val);
    	$('.toggable-list-dropdown').removeClass('active');
    	$('.calculator__form__dropdown').removeClass('active');
		e.stopPropagation();
	});


	/////////
	// Прочие для шаблона
	/////////

	// переключалка показать еще в страховках
	$('.insurance__description__more').click(function(){
		$(this).parent().find('.insurance__description--hidden').slideToggle(200);
	});

	// переключалка текста на мобильном
	$('.promo-text__paragraph h2').click(function(){
		$(this).toggleClass('active');
		$(this).closest('.promo-text__paragraph').find('p').slideToggle();
		$(this).closest('.promo-text__paragraph').find('.promo-text__paragraph__table').slideToggle();
		$(this).closest('.promo-text__paragraph').find('ul').slideToggle();
	});

	// переключалка дополнений страховки на мобильном
	$('.toggable-mobile .insurance__title').click(function(){
		$(this).toggleClass('active');
		$(this).closest('.toggable-mobile').find('.insurance__docs__link').slideToggle();
		$(this).closest('.toggable-mobile').find('.insurance__assist__images').slideToggle();
	});

	// Call BS tooltip
	$(function () {
	  $('i[data-toggle="tooltip"]').tooltip()
	})

	// Загрузка видео
    $('.video__wrap img').click(function(){
    	$('.video__wrap').html('<iframe width="481" height="302" src="https://www.youtube.com/embed/3r9bGkaaaPk" frameborder="0" allowfullscreen></iframe>');
    });


	// переключалка региона

    $('#region-phone--moscow').hide();
    $('#header-region-toggle li a').click(function(){
    	var val = $(this).data('value');
    	$('#selected-region').text(val);
    	if (val == "Москва"){
    		$('#region-phone--spb').hide();
    		$('#region-phone--moscow').show();
    	} else {
    		$('#region-phone--spb').show();
    		$('#region-phone--moscow').hide();
    	}
    });


    // меню гамбургер
	var click = 1;

	$("#show-me-menu").on("click", clickHamb);

	function clickHamb() {
	    if ( click == 1 ) {
	        $(this).addClass('is-active');
	        $('header').css('position', 'static');
	        $('.mobile-nav').slideToggle(300);
	        $('body').css('overflow-y', 'hidden');
	        click = 2;
	    } else {
			$(this).removeClass('is-active');
			$('header').css('position', 'relative');
			$('.mobile-nav').hide();
			$('body').css('overflow-y', 'scroll');
	        click = 1;
	    }
	}

	// Карусельки

	$("#testimonials-carousel").owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		items: 4,
		autoplay:true,
		autoplayTimeout:7000,
		autoplayHoverPause:true,
		responsive : {
		    0 : {
		        items: 1
		    },
		    768 : {
		        items: 2
		    },
		    996 : {
		        items: 3
		    },
		    1170 : {
		    	items: 4
		    }
		}
	});

	function getSliders(){
		$('#press-carousel').owlCarousel({
			loop: false,
			nav: false,
			dots: true,
			items: 1,
			autoplay:true,
			autoplayTimeout:7000,
			autoplayHoverPause:true,
			responsive : {
			    0 : {
			        items: 1
			    },
			    768 : {
			        items: 3
			    }
			}
		});
	};

	if(window.innerWidth < 768 ){
		getSliders();
	}

	$(window).resize(function(){
		if(window.innerWidth < 768 ){
			getSliders();
		} else {
			$('#press-carousel').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
			$('#press-carousel').find('.owl-stage-outer').children().unwrap();
		}
	});

	// плавающий фильтр на втором шаге

	function floatSidebar() {
		var sidebar = $('.calculator__form__filter');
		var sibling = $('#calc__all-offers');
		var siblingHeight = sibling.outerHeight() - 80;
		if( window.innerWidth > 1200 ) {
			var maxPaddingTop = siblingHeight - sidebar.height();
			var paddingTop = $(window).scrollTop()- sibling.offset().top;
			var paddingTop = paddingTop + 0;
			if ( (sidebar.height() + paddingTop) > siblingHeight ) {
				paddingTop = maxPaddingTop;
			} else if ( paddingTop < 0 ) {
				paddingTop = 0;
			}
			sidebar.css('margin-top', paddingTop + 27);
		} else {
			sidebar.css('margin-top', 27);
		}
	}
	if ($('.calculator__form__filter').length > 0){
		floatSidebar();
		$(window).scroll(function () {
			setTimeout(floatSidebar, 100);
		});
		$(window).resize(function () {
			floatSidebar();
		});
	}

	$('.ico-toggle-sidebar-md').click(function(){
		$('.calculator__form__filter').toggleClass('active');
	});

 	// Prevent # errors
	$('[href="#"]').click(function (e) {
		e.preventDefault();
	});

	// smoth scroll
	$('a[href^="#section"]').click(function(){
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top}, 1000);
        return false; 
	});

	$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});
	
	$('.contact-form__file input').on('change', function(){
		getName(this.value);
	});

});

function getName (str){
    if (str.lastIndexOf('\\')){
        var i = str.lastIndexOf('\\')+1;
    }
    else{
        var i = str.lastIndexOf('/')+1;
    }						
    var filename = str.slice(i);			
    var uploaded = document.getElementById("fileformlabel");
    uploaded.innerHTML = filename;
}

////// СПИСОК СТРАН ДЛЯ ОПДСКАЗОК

	var countries = [
		{ value: 'Шенген' },
		{ value: 'Весь мир' },
		{ value: 'Абхазия' },
		{ value: 'Австралия' },
		{ value: 'Австрия' },
		{ value: 'Азербайджан' },
		{ value: 'Азорские острова' },
		{ value: 'Аландские острова' },
		{ value: 'Албания' },
		{ value: 'Алжир' },
		{ value: 'Американское Самоа' },
		{ value: 'Ангилья' },
		{ value: 'Ангола' },
		{ value: 'Андорра' },
		{ value: 'Антарктика' },
		{ value: 'Антигуа и Барбуда' },
		{ value: 'Антильские Острова' },
		{ value: 'Аомынь' },
		{ value: 'Аргентина' },
		{ value: 'Армения' },
		{ value: 'Аруба' },
		{ value: 'Афганистан' },
		{ value: 'Багамские Острова' },
		{ value: 'Бангладеш' },
		{ value: 'Барбадос' },
		{ value: 'Бахрейн' },
		{ value: 'Беларусь' },
		{ value: 'Белиз' },
		{ value: 'Бельгия' },
		{ value: 'Бенин' },
		{ value: 'Бермудские Острова' },
		{ value: 'Болгария' },
		{ value: 'Боливия' },
		{ value: 'Босния и Герцеговина' },
		{ value: 'Ботсвана' },
		{ value: 'Бразилия' },
		{ value: 'Британская территория в Индийском океане' },
		{ value: 'Бруней' },
		{ value: 'Буве' },
		{ value: 'Буркина-Фасо' },
		{ value: 'Бурунди' },
		{ value: 'Бутан' },
		{ value: 'Вануату' },
		{ value: 'Ватикан' },
		{ value: 'Великобритания' },
		{ value: 'Венгрия' },
		{ value: 'Венесуэла' },
		{ value: 'Виргинские Острова (Британские)' },
		{ value: 'Виргинские Острова (США)' },
		{ value: 'Внешние малые острова (США)' },
		{ value: 'Восточный Тимор' },
		{ value: 'Вьетнам' },
		{ value: 'Габон' },
		{ value: 'Гаити' },
		{ value: 'Гайана' },
		{ value: 'Гамбия' },
		{ value: 'Гана' },
		{ value: 'Гваделупа' },
		{ value: 'Гватемала' },
		{ value: 'Гвиана' },
		{ value: 'Гвинея' },
		{ value: 'Гвинея-Бисау' },
		{ value: 'Германия' },
		{ value: 'Гернси' },
		{ value: 'Гибралтар' },
		{ value: 'Гондурас' },
		{ value: 'Гонконг' },
		{ value: 'Гренада' },
		{ value: 'Гренландия' },
		{ value: 'Греция' },
		{ value: 'Грузия' },
		{ value: 'Гуам' },
		{ value: 'Дания' },
		{ value: 'Джерси' },
		{ value: 'Джибути' },
		{ value: 'Доминика' },
		{ value: 'Доминиканская Республика' },
		{ value: 'Египет' },
		{ value: 'Замбия' },
		{ value: 'Западная Сахара' },
		{ value: 'Зимбабве' },
		{ value: 'Израиль' },
		{ value: 'Индия' },
		{ value: 'Индонезия' },
		{ value: 'Иордания' },
		{ value: 'Ирак' },
		{ value: 'Иран' },
		{ value: 'Ирландия' },
		{ value: 'Исландия' },
		{ value: 'Испания' },
		{ value: 'Италия' },
		{ value: 'Йемен' },
		{ value: 'Кабо-Верде' },
		{ value: 'Казахстан' },
		{ value: 'Каймановы Острова' },
		{ value: 'Камбоджа' },
		{ value: 'Камерун' },
		{ value: 'Канада' },
		{ value: 'Катар' },
		{ value: 'Кения' },
		{ value: 'Кипр' },
		{ value: 'Кирибати' },
		{ value: 'Китай' },
		{ value: 'Кокосовые Острова' },
		{ value: 'Колумбия' },
		{ value: 'Коморские Острова' },
		{ value: 'Конго, Демократическая Республика' },
		{ value: 'Корея (Северная)' },
		{ value: 'Корея (Южная)' },
		{ value: 'Косово' },
		{ value: 'Коста-Рика' },
		{ value: 'Кот-дИвуар' },
		{ value: 'Куба' },
		{ value: 'Кувейт' },
		{ value: 'Кука острова' },
		{ value: 'Кыргызстан' },
		{ value: 'Лаос' },
		{ value: 'Латвия' },
		{ value: 'Лесото' },
		{ value: 'Либерия' },
		{ value: 'Ливан' },
		{ value: 'Ливия' },
		{ value: 'Литва' },
		{ value: 'Лихтенштейн' },
		{ value: 'Люксембург' },
		{ value: 'Маврикий' },
		{ value: 'Мавритания' },
		{ value: 'Мадагаскар' },
		{ value: 'Майотта' },
		{ value: 'Македония' },
		{ value: 'Малави' },
		{ value: 'Малайзия' },
		{ value: 'Мали' },
		{ value: 'Мальдивы' },
		{ value: 'Мальта' },
		{ value: 'Мартиника' },
		{ value: 'Маршалловы Острова' },
		{ value: 'Мексика' },
		{ value: 'Микронезия' },
		{ value: 'Мозамбик' },
		{ value: 'Молдова' },
		{ value: 'Монако' },
		{ value: 'Монголия' },
		{ value: 'Монтсеррат' },
		{ value: 'Морокко' },
		{ value: 'Мьянма' },
		{ value: 'Нагорно-Карабахская Республика' },
		{ value: 'Намибия' },
		{ value: 'Науру' },
		{ value: 'Непал' },
		{ value: 'Нигер' },
		{ value: 'Нигерия' },
		{ value: 'Нидерланды' },
		{ value: 'Никарагуа' },
		{ value: 'Ниуэ' },
		{ value: 'Новая Зеландия' },
		{ value: 'Новая Каледония' },
		{ value: 'Норвегия' },
		{ value: 'Норфолк' },
		{ value: 'Объединенные Арабские Эмираты' },
		{ value: 'Оман' },
		{ value: 'Остров Мэн' },
		{ value: 'Остров Рождества' },
		{ value: 'Остров Святой Елены' },
		{ value: 'Острова Уоллис и Футуна' },
		{ value: 'Острова Херд и Макдональд' },
		{ value: 'Пакистан' },
		{ value: 'Палау' },
		{ value: 'Палестина' },
		{ value: 'Панама' },
		{ value: 'Папуа — Новая Гвинея' },
		{ value: 'Парагвай' },
		{ value: 'Перу' },
		{ value: 'Питкэрн' },
		{ value: 'Польша' },
		{ value: 'Португалия' },
		{ value: 'Приднестровье' },
		{ value: 'Пуэрто-Рико' },
		{ value: 'Республика Конго' },
		{ value: 'Реюньон' },
		{ value: 'Россия' },
		{ value: 'Руанда' },
		{ value: 'Румыния' },
		{ value: 'Сальвадор' },
		{ value: 'Самоа' },
		{ value: 'Сан-Марино' },
		{ value: 'Сан-Томе и Принсипи' },
		{ value: 'Саудовская Аравия' },
		{ value: 'Свазиленд' },
		{ value: 'Свальбард' },
		{ value: 'Северные Марианские острова' },
		{ value: 'Сейшельские острова' },
		{ value: 'Сен-Пьер и Микелон' },
		{ value: 'Сенегал' },
		{ value: 'Сент-Винсент и Гренадины' },
		{ value: 'Сент-Киттс и Невис' },
		{ value: 'Сент-Люсия' },
		{ value: 'Сербия' },
		{ value: 'Сингапур' },
		{ value: 'Сирия' },
		{ value: 'Словакия' },
		{ value: 'Словения' },
		{ value: 'Соединенные Штаты Америки' },
		{ value: 'Соломоновы Острова' },
		{ value: 'Сомали' },
		{ value: 'Сомалиленд' },
		{ value: 'Судан' },
		{ value: 'Суринам' },
		{ value: 'Сьерра-Леоне' },
		{ value: 'Таджикистан' },
		{ value: 'Таиланд' },
		{ value: 'Тайвань' },
		{ value: 'Тамил-Илам' },
		{ value: 'Танзания' },
		{ value: 'Тёркс и Кайкос' },
		{ value: 'Того' },
		{ value: 'Токелау' },
		{ value: 'Тонга' },
		{ value: 'Тринидад и Тобаго' },
		{ value: 'Тувалу' },
		{ value: 'Тунис' },
		{ value: 'Турецкая Республика Северного Кипра' },
		{ value: 'Туркменистан' },
		{ value: 'Турция' },
		{ value: 'Уганда' },
		{ value: 'Узбекистан' },
		{ value: 'Украина' },
		{ value: 'Уругвай' },
		{ value: 'Фарерские Острова' },
		{ value: 'Фиджи' },
		{ value: 'Филиппины' },
		{ value: 'Финляндия' },
		{ value: 'Фолклендские (Мальвинские) острова' },
		{ value: 'Франция' },
		{ value: 'Французская Полинезия' },
		{ value: 'Французские Южные и Антарктические Территории' },
		{ value: 'Хорватия' },
		{ value: 'Центральноафриканская Республика' },
		{ value: 'Чад' },
		{ value: 'Черногория' },
		{ value: 'Чехия' },
		{ value: 'Чили' },
		{ value: 'Швейцария' },
		{ value: 'Швеция' },
		{ value: 'Шри-Ланка' },
		{ value: 'Эквадор' },
		{ value: 'Экваториальная Гвинея' },
		{ value: 'Эритрея' },
		{ value: 'Эстония' },
		{ value: 'Эфиопия' },
		{ value: 'Южная Георгия и Южные Сандвичевы острова' },
		{ value: 'Южная Осетия' },
		{ value: 'Южно-Африканская Республика' },
		{ value: 'Ямайка' },
		{ value: 'Япония' }
	];
