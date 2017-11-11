jQuery(document).ready(function($){
   var c = calc; //Вся инфа о позициях и т.п.
   var col_add = 0; //Количество добавленных
   //console.log(c);
   var zakaz = {}; //Информация о заказе
	zakaz.prods = {}; //Продукты купленные
	zakaz.dopusluga = 0; //Доп услуги
	zakaz.coff = 0; 
	zakaz.coff1 = 1; //Сколько нажато + или -  data 3
	zakaz.coff2 = 1; //Сколько нажато + или - data 1
	zakaz.coff3 = 1; //Сколько нажато + или -  data 1
   //Разбиваем и читаем типы конструкций
   for(i=0;i<c.k.length;i++){
	
	var ktypes = c.k[i].info.split(';');
	c.k[i].type = [];
	
	for(ki=0;ki<ktypes.length;ki++){
	   ktypes[ki] = ktypes[ki].replace(/(\r|\n)/gm, ""); //выоезаем переносы строк
	   var ktype = ktypes[ki].split(',');
	   c.k[i].type[ki] = {};
	   c.k[i].type[ki].id = ki;
	   c.k[i].type[ki].size = ktype[0];
	   c.k[i].type[ki].price = ktype[1];
	   c.k[i].type[ki].arenda_price = ktype[2];
	}
	c.k[i].type.pop(); //Удаляем последний пустой элем массива
   }
   var updateCalc = function (){
	zakaz.all_summ = 0; //Общая сумма
	zakaz.prods.col = 0; //Количество продуктов
	zakaz.prods.item = {};
	
	$('.position_row').each(function(){
	    var block = $(this);
	   	 
		if (block.attr('type')=='r') {
			var rprice, rname;
			var bid = Number(block.find('.rtype').val());
			if(bid==0){rprice =  Number(c.r[0].price85r); 	rname="Размер конструкции roll up 85х200 cм "}
			if(bid==1){rprice =  Number(c.r[0].price100r);	rname="Размер конструкции roll up 100х200 cм"}
			if(bid==2){rprice =  Number(c.r[0].price120r);	rname="Размер конструкции roll up 120х200 cм" }
			if(bid==3){rprice =  Number(c.r[0].price150r);	rname="Размер конструкции roll up 150х200 cм" }
			
			zakaz.prods.col++;
			zakaz.prods.item[zakaz.prods.col] = {};
			zakaz.prods.item[zakaz.prods.col].type = 'r';
			zakaz.prods.item[zakaz.prods.col].bitog =  rprice;
			$(this).find('.rprice').val(zakaz.prods.item[zakaz.prods.col].bitog);
			zakaz.prods.item[zakaz.prods.col].name = rname; 
			$(this).find('.rollname').val(zakaz.prods.item[zakaz.prods.col].name); // добавляем в hidden
			
			zakaz.all_summ =  Math.ceil(zakaz.all_summ+rprice);
			
			block.find('.row_summ').html(rprice+' руб.'); //Выводим цену
			block.find('.rowprice').val(rprice);
	    }   
		
		if (block.attr('type')=='p') {
			var pprice;
			var p_sel=block.find('.ptype').val();
			p_sel=p_sel.replace(" руб.", '');
			p_sel=+p_sel;
			pprice=p_sel;
			
			zakaz.prods.col++;
			zakaz.prods.item[zakaz.prods.col] = {};
			zakaz.prods.item[zakaz.prods.col].type = 'p';
			zakaz.prods.item[zakaz.prods.col].bitog =  pprice;
			$(this).find('.pprice').val(zakaz.prods.item[zakaz.prods.col].bitog);
			zakaz.prods.item[zakaz.prods.col].name = "Услуги фотографа"; 
			$(this).find('.photgrname').val("Услуги фотографа"); // добавляем в hidden
			
			zakaz.all_summ =  Math.ceil(zakaz.all_summ+pprice);
			
			block.find('.row_summ').html(pprice+' руб.'); //Выводим цену
			block.find('.rowprice').val(pprice);
	    }
		
	    if (block.attr('type')=='c') {
			var cprice;
			var kolv = Number(block.find('.ckolv').val());
			var bid = Number(block.find('.ctype').val());
			if (kolv<200){
				cprice =  Number(c.c[bid].price100)*kolv;
			} else if (kolv>=200&&kolv<300){
				cprice =  Number(c.c[bid].price200)*kolv;
			} else if (kolv>=300&&kolv<400){
				cprice =  Number(c.c[bid].price300)*kolv;
			} else if (kolv>=400&&kolv<500){
				cprice =  Number(c.c[bid].price400)*kolv;
			} else if (kolv>=500){
				cprice =  Number(c.c[bid].price500)*kolv;
			}
			
			zakaz.prods.col++;
			zakaz.prods.item[zakaz.prods.col] = {};
			zakaz.prods.item[zakaz.prods.col].type = 'b';
			zakaz.prods.item[zakaz.prods.col].name = c.c[bid].name; 
			$(this).find('.phoname').val(c.c[bid].name); // добавляем в hidden
			
			zakaz.prods.item[zakaz.prods.col].bitog =  cprice;
			$(this).find('.cprice').val(zakaz.prods.item[zakaz.prods.col].bitog);
			
			zakaz.prods.item[zakaz.prods.col].kolv = kolv;
			$(this).find('.ckol').val(zakaz.prods.item[zakaz.prods.col].kolv);
			
			zakaz.all_summ =  Math.ceil(zakaz.all_summ+cprice);
			
			block.find('.row_summ').html(cprice+' руб.'); //Выводим цену
			block.find('.rowprice').val(cprice);
	    }
		
	    if (block.attr('type')=='m') {
			var mprice;
			var mkolv = Number(block.find('.mkolv').val());
			var bid = Number(block.find('.mtype').val());
			
			if (mkolv<200){
				mprice =  Number(c.m[bid].price100m)*mkolv;
			} else if (mkolv>=200&&mkolv<300){
				mprice =  Number(c.m[bid].price200m)*mkolv;
			} else if (mkolv>=300&&mkolv<400){
				mprice =  Number(c.m[bid].price300m)*mkolv;
			} else if (mkolv>=400&&mkolv<500){
				mprice =  Number(c.m[bid].price400m)*mkolv;
			} else if (mkolv>=500){
				mprice =  Number(c.m[bid].price500m)*mkolv;
			}
			
			zakaz.prods.col++;
			zakaz.prods.item[zakaz.prods.col] = {};
			zakaz.prods.item[zakaz.prods.col].type = 'b';
			zakaz.prods.item[zakaz.prods.col].name = c.m[bid].name; 
			$(this).find('.magname').val(c.m[bid].name); // добавляем в hidden
			
			zakaz.prods.item[zakaz.prods.col].bitog =  mprice;
			$(this).find('.mprice').val(zakaz.prods.item[zakaz.prods.col].bitog);
			
			zakaz.prods.item[zakaz.prods.col].mkolv = mkolv;
			$(this).find('.mkol').val(zakaz.prods.item[zakaz.prods.col].mkolv);
			
			zakaz.all_summ =  Math.ceil(zakaz.all_summ+mprice);
			
			block.find('.row_summ').html(mprice+' руб.'); //Выводим цену
			block.find('.rowprice').val(mprice);
	    }
	   
	    if (block.attr('type')=='b') {
			var bw = Number(block.find('.bw').val());
			bw = 10*Math.round(bw/10);
			block.find('.bw').val(bw); //округляем до кратности 10
			var bh = Number(block.find('.bh').val());
			bh = 10*Math.round(bh/10);
			block.find('.bh').val(bh); //округляем до кратности 10
			var bid = Number(block.find('.banner_type').val());
			var bs = Math.ceil(bw*bh); //Площадь баннера см2
			var bp = Math.ceil(bw*2+bh*2); //Периметр баннера
			
			//Учитываем цены по размерам 50 50-100 100-200
			if (bs<500000) {
			   var bprice =  Number(c.b[bid].price1);
			} else if (bs>500000&bs<1000000) {
			   var bprice = Number(c.b[bid].price2);
			} else if (bs>1000000) {
			   var bprice = Number(c.b[bid].price3);
			}
			
			zakaz.prods.col++;
			zakaz.prods.item[zakaz.prods.col] = {};
			zakaz.prods.item[zakaz.prods.col].type = 'b';
			zakaz.prods.item[zakaz.prods.col].name = c.b[bid].name; 
			$(this).find('.banname').val(c.b[bid].name); // добавляем в hidden
			
			zakaz.prods.item[zakaz.prods.col].bitog =  Math.ceil(bs/10*bprice);
			$(this).find('.banprice').val(zakaz.prods.item[zakaz.prods.col].bitog);
			zakaz.prods.item[zakaz.prods.col].bw = bw;
			zakaz.prods.item[zakaz.prods.col].bh = bh;
		
		//считаем люверсы
		if(block.find('.luverscheck').attr('checked') == 'checked'){
		    var blstep = block.find('.stepluvers').val();
		    zakaz.prods.item[zakaz.prods.col].luvers_step = blstep;
		    var blcol = Math.ceil(bp/blstep);
		    block.find('.luverscol').val(blcol);
		   
		    zakaz.prods.item[zakaz.prods.col].luvers_col = blcol;
		    var blprice = Math.ceil(blcol*c.i.lprice);
		    zakaz.prods.item[zakaz.prods.col].luvers_price = blprice;
		    block.find('.luversprice').val(blprice);
		   
		    var bitog = zakaz.prods.item[zakaz.prods.col].bitog+blprice;
		    zakaz.prods.item[zakaz.prods.col].bitog = bitog;
		}
		zakaz.all_summ = Math.ceil(zakaz.all_summ+zakaz.prods.item[zakaz.prods.col].bitog);
		block.find('.row_summ').html(zakaz.prods.item[zakaz.prods.col].bitog+' руб.'); //Выводим цену
		block.find('.rowprice').val(zakaz.prods.item[zakaz.prods.col].bitog);
	   } 
	   
	   if (block.attr('type')=='k'){
			zakaz.prods.col++;
			zakaz.prods.item[zakaz.prods.col] = {};
			
			var ktype = Number(block.find('.ktype').val());
			var ksize = Number(block.find('.ksize').val());
			var kbuytype = block.find('.buyorarenda input:checked').val();
			if (kbuytype == 'b') {
			   var kprice = Math.ceil(c.k[ktype].type[ksize].price);
			   zakaz.prods.item[zakaz.prods.col].buy_type = 'b';
			   
			} else {
			   var kprice = Math.ceil(c.k[ktype].type[ksize].arenda_price);
			   zakaz.prods.item[zakaz.prods.col].buy_type = 'a';
			}
			$(this).find('.boras').val(zakaz.prods.item[zakaz.prods.col].buy_type );
			
			zakaz.prods.item[zakaz.prods.col].type = 'k';
			zakaz.prods.item[zakaz.prods.col].name = c.k[ktype].name;
			$(this).find('.konname').val(c.k[ktype].name);
			$(this).find('.konsize').val(c.k[ktype].type[ksize].size);
			zakaz.prods.item[zakaz.prods.col].size = c.k[ktype].type[ksize].size;
			zakaz.prods.item[zakaz.prods.col].price = kprice;
			
			zakaz.all_summ =  Math.ceil(zakaz.all_summ+kprice);
			
			block.find('.row_summ').html(kprice+' руб.'); //Выводим цену
			block.find('.rowprice').val(kprice);
	   }
	});
	//Перебираем доп услуги
	switch (zakaz.dopusluga) {
	   case 1:

		zakaz.all_summ = Math.ceil(zakaz.all_summ + dopcost2*zakaz.coff2); //Добавляем за доставку и монтаж
		//$('.dopcost').val( 1500*zakaz.coff2);
		break;
	   case 2:

		zakaz.all_summ = Math.ceil(zakaz.all_summ + dopcost3*zakaz.coff3); //Услуга доставка, монтаж ,демонтаж
		//$('.dopcost').val( 2000*zakaz.coff3);
		break;
	   case 3:
		
		 zakaz.all_summ = Math.ceil(zakaz.all_summ + dopcost1*zakaz.coff1); //Добавляем за доставку
		// $('.dopcost').val(1000*zakaz.coff1);
		break;
	}
	$('.all_price').html('Общая сумма: <span>'+zakaz.all_summ+' руб.</span>');
	$('.hallprice').val(zakaz.all_summ);
	//console.log(zakaz);
	if (zakaz.prods.col == 0 ) {
	   $('#positions').html('<div class="noitems">Нет позиций</div>');
	} else {
	   $('.noitems').remove();
	}
	checkinputs();
   };
   var checkinputs = function() {
	var zakazbtn = $('.send_zakaz');
	//var user_type = $('.user_type_select').attr('type');
	var user_type = $('.usrtyp').val();
	$('.errinp').removeClass('errinp');
	if (user_type == 'f') {
	   $('.fizlico input').each(function(){
		if ($(this).val() == "") {
		   $(this).addClass('errinp');
		} else {
		   $(this).removeClass('errinp');
		}
	   });
	} else {
	   $('.furlico input').each(function(){
		if ($(this).val() == "") {
		   $(this).addClass('errinp');
		} else {
		   $(this).removeClass('errinp');
		}
	   });
	   
	   var reg_int10 = /^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/;
	   var reg_int9 = /^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/;
	   var reg_int13 = /^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/;
	   var reg_int20 = /^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/;
	   
	   if (reg_int10.test($('#u_inn').val()) == false) {
		$('#u_inn').addClass('errinp');
	   } else {
		$('#u_inn').removeClass('errinp');
	   }
	   if (reg_int9.test($('#u_kpp').val()) == false) {
		$('#u_kpp').addClass('errinp');
	   } else {
		$('#u_kpp').removeClass('errinp');
	   }
	   if (reg_int13.test($('#u_ogrn').val()) == false) {
		$('#u_ogrn').addClass('errinp');
	   } else {
		$('#u_ogrn').removeClass('errinp');
	   }
	   if (reg_int20.test($('#u_schet').val()) == false) {
		$('#u_schet').addClass('errinp');
	   } else {
		$('#u_schet').removeClass('errinp');
	   }
	   if (reg_int9.test($('#u_bik').val()) == false) {
		$('#u_bik').addClass('errinp');
	   } else {
		$('#u_bik').removeClass('errinp');
	   }
	   if (reg_int20.test($('#u_kschet').val()) == false) {
		$('#u_kschet').addClass('errinp');
	   } else {
		$('#u_kschet').removeClass('errinp');
	   }
	}
	$('.banfile').each(function(){
	   if($(this).val() == '') {
		//$(this).addClass('errinp');
	   } else {
		$(this).removeClass('errinp');
	   }
	});
	if ($('.errinp').length == 0 && zakaz.prods.col > 0) {
		zakazbtn.prop('disabled', false);
		$('.send_zakaz-over').hide();
	} else {
	   zakazbtn.prop('disabled', true);
	   $('.send_zakaz-over').show();
	}
	//console.log('checkinput');
   };
   var updateKonstruktion = function (t){
   	
	//$('select.ktype').each(function(i){

	   //var row_id = $(this).parents('.position_row').eq(0).attr('row');
	   //var konst_id = $(this).val();
	   var row_id = t.parents('.position_row').eq(0).attr('row');
	   var konst_id = t.val();
	   var k_row = '<span class="label_span pos-label">Выберите размер: </span><select name="k_konst['+row_id+'][size]" class="ksize">';
	   for(i=0;i<c.k[konst_id].type.length;i++){
		k_row += '<option value="'+c.k[konst_id].type[i].id+'">'+c.k[konst_id].type[i].size+'</option>';
	   }
	   k_row += '</select></div><div class="buyorarenda"><span class="label_span pos-label">Тип покупки: </span>';
	   k_row += '<div class="row"><input type="radio" name="k_konst['+row_id+'][bora]" value="b" checked id="k-pok"><label for="k-pok">Покупка</label>';
	   k_row += '<input type="radio" name="k_konst['+row_id+'][bora]" value="a"  id="k-are"><label for="k-are">Аренда</label></div>';
	   //$(this).next('.ksizeselect').html(k_row);
	   //$(this).parents('.position_row').eq(0).find('.ksizeselect').html(k_row);
	   t.parents('.position_row').eq(0).find('.ksizeselect').html(k_row);
	   $('.jClever').jCleverAPI('refresh');
	//});
   };
   //Add positions
   $('#addposition').click(function(){
	var type_position = $('#positiontype').val();
	if(type_position == 'r') {
	   var col = col_add++;
	   var r_row = '<div class="position_row" type="r" row="'+col+'"><div class="close_row"></div><div class="row_title">Roll up</div><div class="roll_tip pos-label">Выберите размер конструкции: </div><select name="roll_sel['+col+'][rtype]" class="rtype">';
	   r_row += '<option value="0">Размер конструкции roll up 85х200 cм  </option>';
	   r_row += '<option value="1">Размер конструкции roll up 100х200 cм</option>';
	   r_row += '<option value="2">Размер конструкции roll up 120х200 cм</option>';
	   r_row += '<option value="3">Размер конструкции roll up 150х200 cм</option>';
	   
	   r_row += '</select><input type="hidden" class="rollname" name="r_roll['+col+'][name]" ><input type="hidden" class="rowprice" name="r_roll['+col+'][price]" ><div class="row_summ"></div></div>';
	   
	   $('#positions').append(r_row);
	}
	if(type_position == 'p') {
	   var col = col_add++;
	   var p_row = '<div class="position_row" type="p" row="'+col+'"><div class="close_row"></div><div class="row_title">Услуги фотографа</div><div class="photrg_tip pos-label">Выберите цену: </div><select name="photrg_sel['+col+'][ptype]" class="ptype">';
	   for(i=500;i<50001;i=i+500){
			p_row += '<option value="'+i+'">'+i+' руб.</option>';
	   }
	   p_row += '</select><input type="hidden" class="photgrname" name="p_photgr['+col+'][name]" ><input type="hidden" class="rowprice" name="p_photgr['+col+'][price]" ><div class="row_summ"></div></div>';
	   
	   $('#positions').append(p_row);
	}
	if(type_position == 'c') {
	   var col = col_add++;
	   var c_row = '<div class="position_row" type="c" row="'+col+'"><div class="close_row"></div><div class="row_title">Печать фотографий</div><div class="photo_tip pos-label">Выберите тип: </div><select name="c_phot['+col+'][ctype]" class="ctype">'
	   for(i=0;i<c.c.length;i++){
		c_row += '<option  value="'+c.c[i].id+'">'+c.c[i].name+'</option>';
	   }
	   c_row += '</select><div class="pr-sep"></div><div class="banner_tip pos-label">Введите кол-во: </div><input type="text" name="ckolv" class="ckolv" value="1"><span class="cm">шт.</span>';
	   c_row += '<input type="hidden" class="phoname" name="c_phot['+col+'][name]" ><input type="hidden" class="ckol" name="c_phot['+col+'][kol]" ><input type="hidden" class="rowprice" name="c_phot['+col+'][price]" ><div class="row_summ"></div></div>';
	   
	   $('#positions').append(c_row);
	}
	if(type_position == 'm') {
	   var col = col_add++;
	   var m_row = '<div class="position_row" type="m" row="'+col+'"><div class="close_row"></div><div class="row_title">Изготовление фотомагнитов</div><div class="photo_tip pos-label">Выберите тип: </div><select name="m_phot['+col+'][mtype]" class="mtype">'
	   for(i=0;i<c.m.length;i++){
		m_row += '<option  value="'+c.m[i].id+'">'+c.m[i].name+'</option>';
	   }
	   m_row += '</select><div class="pr-sep"></div><div class="banner_tip pos-label">Введите кол-во: </div><input type="text" name="mkolv" class="mkolv" value="1"><span class="cm">шт.</span>';
	   m_row += '<input type="hidden" class="magname" name="m_phot['+col+'][name]" ><input type="hidden" class="mkol" name="m_phot['+col+'][kol]" ><input type="hidden" class="rowprice" name="m_phot['+col+'][price]" ><div class="row_summ"></div></div>';
	   
	   $('#positions').append(m_row);
	}
	if(type_position == 'b') {
	   var col = col_add++;
	   var b_row = '<div class="position_row" type="b" row="'+col+'"><div class="close_row"></div><div class="row_title">Баннер</div>';
	   b_row += '<div class="banner_tip pos-label">Выберите тип: </div><select name="p_banner['+col+'][bantype]" class="banner_type">';
	   for(i=0;i<c.b.length;i++){
		b_row += '<option  value="'+c.b[i].id+'">'+c.b[i].name+'</option>';
	   }
	   b_row += '</select><div class="pr-sep"></div>';
	   b_row += '<div class="pos-label">Ширина: </div><input type="text" name="p_banner['+col+'][bw]" class="bw" value="10" placeholder="Ширина" /><span class="cm">см</span>';
	   b_row += '<span style="padding-left:76px;">Высота: </span><input type="text" name="p_banner['+col+'][bh]" class="bh" value="10" placeholder="Высота" /><span class="cm">см</span>';
	   b_row += '<br><br><div class="pos-label" style="padding-top: 5px;">Загрузите макет: </div><input name="banfiles[]" class="banfile" type="file"><br><br>';
	   b_row += '<input type="checkbox" name="p_banner['+col+'][luvers]" class="luverscheck"><div style="float:left">Добавить люверсы – ';
	   b_row += 'выберите шаг </div><div class="b-sel-x"><select class="stepluvers" name="p_banner['+col+'][stepluvers]"  disabled><option value="10">10</option><option value="15">15</option><option value="20">20</option><option value="25">25</option><option value="30">30</option></select><span class="cm"> см</span></div>';
	   b_row += '<input type="hidden" class="banname" name="p_banner['+col+'][name]"><input type="hidden" class="luversprice" name="p_banner['+col+'][luversprice]"><input type="hidden" class="luverscol" name="p_banner['+col+'][luverscol]">';
	   b_row += '<input type="hidden" class="banprice" name="p_banner['+col+'][banprice]"><input type="hidden" class="rowprice" name="p_banner['+col+'][price]"><div class="row_summ"></div></div>';
	   $('#positions').append(b_row);
	} 
	if(type_position == 'k')  {
	   var col = col_add++;
	   var k_row = '<div class="position_row" type="k" row="'+col+'"><div class="close_row"></div><div class="row_title">Конструкция пресс волл</div><span class="label_span pos-label">Выберите тип: </span><select name="k_konst['+col+'][type]" class="ktype">'
	   for(i=0;i<c.k.length;i++){
		k_row += '<option name="k_konst['+col+'][type]" value="'+c.k[i].id+'">'+c.k[i].name+'</option>';
	   }
	   k_row += '</select><div class="ksizeselect"></div>';
	   k_row += '<input type="hidden" class="konname" name="k_konst['+col+'][name]" ><input type="hidden" class="konsize" name="k_konst['+col+'][size]" ><input type="hidden" class="rowprice" name="k_konst['+col+'][price]" ><input type="hidden" class="boras" name="k_konst['+col+'][boras]" ><div class="row_summ"></div></div>';
	   
	   $('#positions').append(k_row);

	   var last_select_ktype = $('#positions').find('.position_row').eq(-1).find('select.ktype');

	   updateKonstruktion(last_select_ktype);
	}
	$('.jClever').jCleverAPI('refresh');
	updateCalc();
   });
   $('#positions').on('change','select.ktype', function(){
	updateKonstruktion($(this));
   });
   $('body').on('change','#calcform', function(){
   	updateCalc();
   });
   $('#positions').on('keyup','.mkolv, .ckolv', function(){
   	updateCalc();
   });
   
   $('#positions').on('change','.luverscheck', function(){
	if($(this).prop('checked')){
		$(this).parent().parent().find('.stepluvers').prop('disabled', false);
	} else {
	   $(this).parent().parent().find('.stepluvers').prop('disabled', true);
	}
   });
   $('#positions').on('click', '.close_row', function(){
	$(this).parent('.position_row').slideUp(200, function(){
	   $(this).remove();
	   updateCalc();
	});
   });
   $('.user_inputs input').change(function(){
	checkinputs();	
   });

$('.send_zakaz-over').on('mouseover', function(){
	checkinputs();
});

   $('input[name=liso-radio]').on('change',function(){
		var id = $(this).attr('id');
		if(id == 'liso-ur'){
			$('.fizlico').hide();
			$('.furlico').fadeIn();
			$('.usrtyp').val('u');
			zakaz.user_type = 'u';
		}
		else if(id == 'liso-fiz'){
			$('.furlico').hide();
			$('.fizlico').fadeIn();
			$('.usrtyp').val('f');
			zakaz.user_type = 'f';
		}

		checkinputs();
	});

/*
   $('.user_type_select > span').click(function(){
	$('.user_type_select > span').toggleClass('active');
	$('.fizlico').toggle();
	$('.furlico').toggle();
	var user_type = $('.user_type_select').attr('type');
	if (user_type == 'f') {
	   zakaz.user_type = 'u'; //Меняем на юр лицо
	   $('.user_type_select').attr('type', 'u');
	} else {
	   zakaz.user_type = 'f'; //Меняем на физ лицо
	   $('.user_type_select').attr('type', 'f');
	}

	$('.usrtyp').val($('.user_type_select').attr('type'));
	
	checkinputs();
   });
*/

	$('input[name=dop-us-radio]').on('change',function(){
		var id = $(this).attr('id');

		if(id == 'dop-not'){
			zakaz.dopusluga = 0
			zakaz.dopcost = 0;
			$('.dopusluganame').val(zakaz.dopusluga);
			$('.dopcost').val(zakaz.dopcost);
		}
		else if(id == 'dop-dost'){
			zakaz.dopusluga = 3
			zakaz.dopcost = dopcost1;
			$('.dopusluganame').val(zakaz.dopusluga);
			$('.dopcost').val(dopcost1);
		}
		else if(id == 'dop-dost-mont'){
			zakaz.dopusluga = 1
			zakaz.dopcost = dopcost2;
			$('.dopusluganame').val(zakaz.dopusluga);
			$('.dopcost').val(dopcost2);
		}
		else if(id == 'dop-dost-mont-demont'){
			zakaz.dopusluga = 2
			zakaz.dopcost = dopcost3;
			$('.dopusluganame').val(zakaz.dopusluga);
			$('.dopcost').val(dopcost3);
		}

		zakaz.coff1 = 1;
		zakaz.coff2 = 1;	
		zakaz.coff3 = 1;	

		updateCalc();		
	});


/*
   $('.dop_uslugi_select  > div').click(function(){
	zakaz.dopusluga = Number($(this).attr("data"));
	zakaz.dopcost = Number($(this).attr("cost"));
	zakaz.coff1 = 1;
	zakaz.coff2 = 1;	
	zakaz.coff3 = 1;	
	//console.log($(this).attr("data"));
	$('.dopusluganame').val($(this).attr("data"));
	$('.dopcost').val($(this).attr("cost"));
	
	$('.activedopusluga').removeClass('activedopusluga');
	$(this).toggleClass('activedopusluga');
	updateCalc();
   });
*/

	/*
	$('#plus1').click(function(){	$('.dopcost').val(1000);
				zakaz.coff1++;updateCalc();$('.dopcost').val(zakaz.coff1*1000);
			 });
	$('.minus1').click(function(){$('.dopcost').val(1000);
			if(zakaz.coff1<=1){}else{zakaz.coff1--;$('.dopcost').val(zakaz.coff1*1000);}updateCalc();
		});
	$('.plus2').click(function(){$('.dopcost').val(1500);
			zakaz.coff2++;updateCalc();$('.dopcost').val(zakaz.coff2*1500);
		 });
	$('.minus2').click(function(){$('.dopcost').val(1500);
			if(zakaz.coff2<=1){}else{zakaz.coff2--;$('.dopcost').val(zakaz.coff2*1500);}updateCalc();
		});	
	$('.plus3').click(function(){$('.dopcost').val(2000);
			zakaz.coff3++;updateCalc();$('.dopcost').val(zakaz.coff3*2000);
		 });
	$('.minus3').click(function(){$('.dopcost').val(2000);
			if(zakaz.coff3<=1){}else{zakaz.coff3--;$('.dopcost').val(zakaz.coff3*2000);}updateCalc();
		});	
	*/

   updateCalc();
});