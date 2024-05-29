window.onload = function () {
	document.body.classList.add('loaded_hiding');
	window.setTimeout(function () {
		document.body.classList.add('loaded');
		document.body.classList.remove('loaded_hiding');
	}, 2100);
}
//Всплывающая фамилия
const availableTags = [];

$(document).ready(function () {

	$('.border_gkl,.border_playwood,.border_osb,.border_csp, #btn2').css({ 'display': 'flex' }).hide();

	var widthList;
	var heightList;
	var titleWidth = $('#width');
	var titleHeight = $('#height');
	var btn = $('button');
	var listName = $('#listName');
	var msg = $('.msg');
	var lists = {
		osb: [2500, 1250],
		osb24: [2440, 1220],
		playWood: [1525, 1525],
		playWood24: [2440, 1220],
		gkl: [2500, 1200],
		gkl20: [2000, 1200],
		gkl26: [2600, 1200],
		gkl27: [2700, 1200],
		gkl30: [3000, 1200],
		gkl33: [3300, 1200],
		gkl095: [1950, 1200],
		gkl15: [1500, 600],
		dvp: [2745, 1220],
		dvp21: [2140, 1220],
		gvl: [2500, 1200],
		csp: [3200, 1200],
		csp12: [1200, 795],
		dsp: [2750, 1830],
		playWoodLaminated: [2440, 1220],
		slate: [3000, 1500],
		slate15: [1500, 300],
		sml: [2440, 1220],
		polycarbonate: [6000, 2100],
		spanel22: [2200, 1500],
		spanel240: [2200, 400],
		dspGroove900: [2440, 900],
		dspGroove600: [2440, 600],
		hotRolled: [2500, 1250],
		hotRolled125: [1250, 750],
		hotRolled15: [1500, 550],
		akvaV: [2400, 1200],
		akvaN: [2400, 1200],
		akvaVsm: [1200, 900],
	}
	//Дроп блоки

	$(function () {
		$(".saw").draggable({
			containment: "#list",
			scroll: false,
			snap: true,
			zIndex: 100,
			snapTolerance: 7,
			snapMode: "outer",
			scope: "default"
		});
		$("#list").droppable({
			drop: function (event, ui) {
				$(this).addClass("ui-state-highlight")
			}
		});
	});
	$(".saw").droppable({
	});
	//(1)Если список с распилом виден, показываем кнопку удалить рез, если нет -  убрать
	function opacityUl() {
		var fff = $('.cutV li');
		if ($(fff).is(":visible")) {
			$('#btn2').slideDown();
		} else {
			$('#btn2').hide();
			$('.values').css({ 'opacity': '0' });
		}
	};
	var cutHeight = [];
	cutHeight = $('.saw');
	var cutWidth = [];
	cutWidth = $('.cut');
	//При клике на кнопку "Добавить рез" Добавляет рез
	var activeStep = 0;
	$("#btn").click(function () {
		$('.saw').removeClass('active');
		$('.saw').eq(activeStep++).css({ 'display': 'flex' });
		$('.saw:visible:last').addClass('active');
		$('#btn2').slideDown();
		$('.values').css({ 'opacity': '1' });
		if (activeStep == $('.saw').length);
		li();
	});

	//При клике на кнопку "Добавить рез" Добавляет список 
	var liStep = 0;
	function li() {
		$('.cutV').show();
		$('.cutV li').eq(liStep++).css({ 'display': 'flex' });
		cutWidth1 = $(".saw:visible:last");
		if (liStep == $('.cutV li').length);
	};


	//При клике на "Удалить" удаляем значения в последнем блоке и инпуте, возвращаем блок на место
	$('#btn2').on('click', function () {
		$(".elH:visible:last,.elW:visible:last").text(' ');
		$('.saw:visible:last').css({
			'left': '0px',
			'top': '0px'
		});
		$(".saw:visible:last").width('30px').height('30px').hide();
		$(".width1:visible:last,.height1:visible:last").val(' ');
		activeStep--;
		liStep--;
		$(".cutV li:visible:last").hide();
		//Вызов функции (1)
		opacityUl();
	});

	//При нажатии на кнопки с листами выставляем значения для:Высоты,Ширины листа,меняем фон,меняем текст в Наименовании
	for (var i = 0; i < btn.length; i++) {
		btn[i].onclick = showAnswer;
	}
	function showAnswer(eventObj) {
		btn = eventObj.target;
		name = btn.id;
		widthList = parseInt(widthList);
		if (name == 'osb') {
			widthList = lists.osb[0];
			heightList = lists.osb[1];
			$('.fone').css({ 'background': 'url(img/wood.jpg)' });
			listName.html('Плита OSB 2500' + ' ' + '×' + ' ' + '1250' + ' ' + '×' + ' ' + '<select name="number" class="number"><option>9</option><option selected="selected">12</option><option>15</option><option>18</option><option>22</option></select>' + 'мм');
		}
		else if (name == 'osb24') {
			widthList = lists.osb24[0];
			heightList = lists.osb24[1];
			$('.fone').css({ 'background': 'url(img/wood.jpg)' });
			listName.html('Плита OSB 2440' + ' ' + '×' + ' ' + '1220' + ' ' + '×' + ' ' + '<select name="number" class="number"><option>9</option><option selected="selected">12</option><option>15</option></select> ' + 'мм');
		}
		else if (name == 'playWood') {
			widthList = lists.playWood[0];
			heightList = lists.playWood[1];
			$('.fone').css({ 'background': 'url(img/playwood.jpg)' });
			listName.html('Фанера ФК 1525' + ' ' + '×' + ' ' + '1525' + ' ' + '×' + ' ' + '<select name="number" class="number"><option>4</option><option>6</option><option selected="selected">8</option><option>10</option><option>12</option><option>15</option><option>18</option><option>21</option></select>' + 'мм');
		}
		else if (name == 'playWood24') {
			widthList = lists.playWood24[0];
			heightList = lists.playWood24[1];
			$('.fone').css({ 'background': 'url(img/playwood.jpg)' });
			listName.html('Фанера ФСФ 2440' + ' ' + '×' + ' ' + '1220' + ' ' + '×' + ' ' + '<select name="number" class="number"><option>9</option><option>12</option><option selected="selected">15</option><option>18</option><option>21</option></select>' + 'мм');
		}
		else if (name == 'gkl15') {
			widthList = lists.gkl15[0];
			heightList = lists.gkl15[1];
			$('.fone').css({ 'background': 'url(img/gkl.jpg)' });
			listName.html('ГКЛ 1500' + ' ' + '×' + ' ' + '600' + ' ' + '×' + ' ' + '12.5' + 'мм');
		}
		else if (name == 'gkl') {
			widthList = lists.gkl[0];
			heightList = lists.gkl[1];
			$('.fone').css({ 'background': 'url(img/gkl.jpg)' });
			listName.html('ГКЛ 2500' + ' ' + '×' + ' ' + '1200' + ' ' + '×' + ' ' + '<select name="number" class="number"><option>6.5</option><option>9.5</option><option selected="selected">12.5</option><option>15</option></select>' + 'мм');
		}
		else if (name == 'gkl20') {
			widthList = lists.gkl20[0];
			heightList = lists.gkl20[1];
			$('.fone').css({ 'background': 'url(img/gkl.jpg)' });
			listName.html('ГКЛ 2000' + ' ' + '×' + ' ' + '1200' + ' ' + '×' + ' ' + '12.5' + ' ' + 'мм');
		}
		else if (name == 'gkl26') {
			widthList = lists.gkl26[0];
			heightList = lists.gkl26[1];
			$('.fone').css({ 'background': 'url(img/gkl.jpg)' });
			listName.html('ГКЛ 2600' + ' ' + '×' + ' ' + '1200' + ' ' + '×' + ' ' + '12.5' + ' ' + 'мм');
		}
		else if (name == 'gkl30') {
			widthList = lists.gkl30[0];
			heightList = lists.gkl30[1];
			$('.fone').css({ 'background': 'url(img/gkl.jpg)' });
			listName.html('ГКЛ 3000' + ' ' + '×' + ' ' + '1200' + ' ' + '×' + ' ' + '<select name="number" class="number"><option>6.5</option><option>9.5</option><option selected="selected">12.5</option><option>15</option></select>' + 'мм');
		}
		else if (name == 'gkl27') {
			widthList = lists.gkl27[0];
			heightList = lists.gkl27[1];
			$('.fone').css({ 'background': 'url(img/gkl.jpg)' });
			listName.html('ГКЛ 2700' + ' ' + '×' + ' ' + '1200' + ' ' + '×' + ' ' + '12.5' + ' ' + 'мм');
		}
		else if (name == 'gkl33') {
			widthList = lists.gkl33[0];
			heightList = lists.gkl33[1];
			$('.fone').css({ 'background': 'url(img/gkl.jpg)' });
			listName.html('ГКЛ 3300' + ' ' + '×' + ' ' + '1200' + ' ' + '×' + ' ' + '12.5' + ' ' + 'мм');
		}
		else if (name == 'gkl095') {
			widthList = lists.gkl095[0];
			heightList = lists.gkl095[1];
			$('.fone').css({ 'background': 'url(img/gkl.jpg)' });
			listName.html('ГКЛ 1950' + ' ' + '×' + ' ' + '1200' + ' ' + '×' + ' ' + '12.5' + ' ' + 'мм');
		}
		else if (name == 'dvp') {
			widthList = lists.dvp[0];
			heightList = lists.dvp[1];
			$('.fone').css({ 'background': 'url(img/dvp.jpg)' });
			listName.html('ДВП 2745' + ' ' + '×' + ' ' + '1220' + ' ' + '×' + ' ' + '3.2' + ' ' + 'мм');
		}
		else if (name == 'dvp21') {
			widthList = lists.dvp21[0];
			heightList = lists.dvp21[1];
			$('.fone').css({ 'background': 'url(img/dvp.jpg)' });
			listName.html('ДВП 2140' + ' ' + '×' + ' ' + '1220' + ' ' + '×' + ' ' + '3' + ' ' + 'мм');
		}
		else if (name == 'gvl') {
			widthList = lists.gvl[0];
			heightList = lists.gvl[1];
			$('.fone').css({ 'background': 'url(img/gvl.jpg)' });
			listName.html('ГВЛ 2500' + ' ' + '×' + ' ' + '1200' + ' ' + '×' + ' ' + '<select name="number" class="number"><option>10</option><option selected="selected">12</option></select>' + 'мм');
		}
		else if (name == 'csp') {
			widthList = lists.csp[0];
			heightList = lists.csp[1];
			$('.fone').css({ 'background': 'url(img/csp.jpg)' });
			listName.html('ЦСП 3200' + ' ' + '×' + ' ' + '1200' + ' ' + '×' + ' ' + '<select name="number" class="number"><option>10</option><option selected="selected">12</option><option>16</option><option>20</option></select>' + 'мм');
		}
		else if (name == 'csp12') {
			widthList = lists.csp12[0];
			heightList = lists.csp12[1];
			$('.fone').css({ 'background': 'url(img/csp.jpg)' });
			listName.html('ЦСП 1200' + ' ' + '×' + ' ' + '795' + ' ' + '×' + ' ' + '8' + ' ' + 'мм');
		}
		else if (name == 'dsp') {
			widthList = lists.dsp[0];
			heightList = lists.dsp[1];
			$('.fone').css({ 'background': 'url(img/dsp.jpg)' });
			listName.html('ДСП 2750' + ' ' + '×' + ' ' + '1830' + ' ' + '×' + ' ' + '16' + ' ' + 'мм');
		}
		else if (name == 'playWoodLaminated') {
			widthList = lists.playWoodLaminated[0];
			heightList = lists.playWoodLaminated[1];
			$('.fone').css({ 'background': 'url(img/wood_texture3142.jpg)' });
			listName.html('Фанера ламинированная 2440' + ' ' + '×' + ' ' + '1220' + ' ' + '×' + ' ' + '<select name="number" class="number"><option selected="selected">15</option><option>18</option><option>21</option></select>' + ' ' + 'мм');
		}
		else if (name == 'slate') {
			widthList = lists.slate[0];
			heightList = lists.slate[1];
			$('.fone').css({ 'background': 'url(img/csp.jpg)' });
			listName.html('Шифер плоский 3000' + ' ' + '×' + ' ' + '1500' + ' ' + '×' + ' ' + '10' + ' ' + 'мм');
		}
		else if (name == 'sml') {
			widthList = lists.sml[0];
			heightList = lists.sml[1];
			$('.fone').css({ 'background': 'url(img/gvl.jpg)' });
			listName.html('СМЛ 2440' + ' ' + '×' + ' ' + '1220' + ' ' + '×' + ' ' + '<select name="number" class="number"><option selected="selected">8</option><option>10</option></select>' + ' ' + 'мм');
		}
		else if (name == 'slate15') {
			widthList = lists.slate15[0];
			heightList = lists.slate15[1];
			$('.fone').css({ 'background': 'url(img/csp.jpg)' });
			listName.html('Шифер плоский 1500' + ' ' + '×' + ' ' + '300' + ' ' + '×' + ' ' + '8' + ' ' + 'мм');
		}
		else if (name == 'isoplat') {
			widthList = lists.gkl27[0];
			heightList = lists.gkl27[1];
			$('.fone').css({ 'background': 'url(img/dsp.jpg)' });
			listName.html('Плита Изоплат 2700' + ' ' + '×' + ' ' + '1200' + ' ' + '×' + ' ' + '<select name="number" class="number"><option selected="selected">12</option><option>24</option></select>' + ' ' + 'мм');
		}
		else if (name == 'spanel') {
			widthList = lists.slate[0];
			heightList = lists.slate[1];
			$('.fone').css({ 'background': 'url(img/spanel.jpg)' });
			listName.html('Сэндвич-панель ПВХ 3000' + ' ' + '×' + ' ' + '1500' + ' ' + '×' + ' ' + '10' + ' ' + 'мм');
		}
		else if (name == 'spanel22') {
			widthList = lists.spanel22[0];
			heightList = lists.spanel22[1];
			$('.fone').css({ 'background': 'url(img/spanel.jpg)' });
			listName.html('Сэндвич-панель ПВХ 1500' + ' ' + '×' + ' ' + '2200' + ' ' + '×' + ' ' + '10' + ' ' + 'мм');
		}
		else if (name == 'spanel240') {
			widthList = lists.spanel240[0];
			heightList = lists.spanel240[1];
			$('.fone').css({ 'background': 'url(img/spanel.jpg)' });
			listName.html('Сэндвич-панель ПВХ 2200' + ' ' + '×' + ' ' + '400' + ' ' + '×' + ' ' + '10' + ' ' + 'мм');
		}
		else if (name == 'polycarbonate') {
			widthList = lists.polycarbonate[0];
			heightList = lists.polycarbonate[1];
			$('.fone').css({ 'background': 'url(img/poly.jpg)' });
			listName.html('Поликарбонат 6000' + ' ' + '×' + ' ' + '2100' + ' ' + '×' + ' ' + '<select name="number" class="number"><option selected="selected">3-4</option><option>4</option><option>6</option><option>8</option><option>10</option></select>' + ' ' + 'мм');
		}
		else if (name == 'dspGroove600') {
			widthList = lists.dspGroove600[0];
			heightList = lists.dspGroove600[1];
			$('.fone').css({ 'background': 'url(img/dsp.jpg)' });
			listName.html(`ДСП 2440х600 Quick Deck Professional шпунтованная <select name="number" class="number"><option selected="selected">16</option><option>22</option></select> мм`);
		}
		else if (name == 'dspGroove900') {
			widthList = lists.dspGroove900[0];
			heightList = lists.dspGroove900[1];
			$('.fone').css({ 'background': 'url(img/dsp.jpg)' });
			listName.html(`ДСП 2440х900 Quick Deck Professional шпунтованная 12 мм`);
		}
		else if (name == 'hotRolled') {
			widthList = lists.hotRolled[0];
			heightList = lists.hotRolled[1];
			$('.fone').css({ 'background': 'url(img/csp.jpg)' });
			listName.html(`Лист горячекатаный 2500х1250 мм
			<select name="number" class="number">
			<option selected="selected">1.5</option>
			<option>2</option>
			<option>3</option>
			<option>4</option>
			</select> мм`);
		}
		else if (name == 'hotRolled125') {
			widthList = lists.hotRolled125[0];
			heightList = lists.hotRolled125[1];
			$('.fone').css({ 'background': 'url(img/csp.jpg)' });
			listName.html(`Лист горячекатаный 1250х750 мм
			<select name="number" class="number">
			<option selected="selected">2</option>
			<option>3</option>
			</select> мм`);
		}
		else if (name == 'hotRolled15') {
			widthList = lists.hotRolled15[0];
			heightList = lists.hotRolled15[1];
			$('.fone').css({ 'background': 'url(img/csp.jpg)' });
			listName.html(`Лист горячекатаный 1500х550 мм 4 мм`);
		}



		else if (name == 'akvaV') {
			widthList = lists.akvaV[0];
			heightList = lists.akvaV[1];
			$('.fone').css({ 'background': 'url(img/csp.jpg)' });
			listName.html(`Аквапанель Кнауф Внутренняя 1200х2400х12,5 мм`);
		}

		else if (name == 'akvaN') {
			widthList = lists.akvaN[0];
			heightList = lists.akvaN[1];
			$('.fone').css({ 'background': 'url(img/csp.jpg)' });
			listName.html(`Аквапанель Кнауф Наружная 1200х2400х12,5 мм`);
		}

		else if (name == 'akvaVsm') {
			widthList = lists.akvaVsm[0];
			heightList = lists.akvaVsm[1];
			$('.fone').css({ 'background': 'url(img/csp.jpg)' });
			listName.html(`Аквапанель Кнауф Внутренняя 900х1200х12,5 мм`);
		}
	}
	//Коэффициент ширины к масштабу
	function widthValue(widthCoefficient) {
		widthCoefficient = widthList / 480;
		return widthCoefficient;
	}
	//Коэффициент высоты к масштабу
	function heightValue(heightCoefficient) {
		heightCoefficient = heightList / 230;
		return heightCoefficient;
	}

	//Значения для для полей ввода "Длина"
	var valuesInputWidth = document.querySelectorAll('.width1');
	for (var i = 0; i < valuesInputWidth.length; i++) {
		$(valuesInputWidth[i]).on('focus click keyup', showValueWidth);
	}
	function showValueWidth(eventValueWidth) {
		valuesInputWidth = eventValueWidth.target;
		valueInpWidth = valuesInputWidth.value;
		if (valueInpWidth !== '') {
			widthResult = valueInpWidth / widthValue();
			ids = valuesInputWidth.id;
			nameWidth = ids - 20;
			nameWidth = [cutWidth[nameWidth]];
			$(nameWidth).children('.elW').text(valueInpWidth);
			$(nameWidth).outerWidth(widthResult);
			maxValueWidth(this);
			function maxValueWidth(obj) {
				if (obj.value > widthList) {
					obj.value = widthList;
					widthResult = obj.value / widthValue();
					$(nameWidth).children('.elW').text(widthList);
					$(nameWidth).outerWidth(widthResult);
				}
			}
		}

	};
	//Значения для для полей ввода "Ширина"
	var valuesInputHeight = document.querySelectorAll('.height1');
	for (var i = 0; i < valuesInputHeight.length; i++) {
		$(valuesInputHeight[i]).on('focus click keyup', showValueHeight);
	}
	function showValueHeight(eventValueHeight) {
		valuesInputHeight = eventValueHeight.target;
		valueInpHeight = valuesInputHeight.value;
		if (valueInpHeight !== '') {
			heightResult = valueInpHeight / heightValue();
			ids = valuesInputHeight.id;
			nameHeight = cutHeight[ids];
			$(nameHeight).children('.elH').text(valueInpHeight);
			$(nameHeight).outerHeight(heightResult);
			maxValueHeight(this);

			function maxValueHeight(obj) {
				if (obj.value > heightList) {
					obj.value = heightList;
					heightResult = obj.value / heightValue();
					$(nameHeight).children('.elH').text(heightList);
					$(nameHeight).outerHeight(heightResult);
				}
			}
		}
	};

	//Текст с размерами возле листа
	function text() {
		titleWidth.text(widthList + ' ' + 'мм');
		titleHeight.text(heightList + ' ' + 'мм');
	};
	//Кнопки с листами(показывают размер листа)
	$(btn).on('click', text);



	//Сегодняшняя дата
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth() + 1; //Январь равен 0!
	var yyyy = today.getFullYear();
	if (dd < 10) {
		dd = '0' + dd
	}
	if (mm < 10) {
		mm = '0' + mm
	}
	today = dd + '.' + mm + '.' + yyyy;
	var elDate = $('#order_data');
	$(elDate).text(today);


	$(function () {
		$("#tags").autocomplete({
			source: availableTags
		});
	});

	//Значение Плюс - Минус возле количества
	$(function () {
		(function quantityProducts() {
			var $quantityArrowMinus = $(".quantity-arrow-minus");
			var $quantityArrowPlus = $(".quantity-arrow-plus");
			var $quantityNum = $(".quantity-num");
			$quantityArrowMinus.click(quantityMinus);
			$quantityArrowPlus.click(quantityPlus);
			function quantityMinus() {
				if ($quantityNum.val() > 1) {
					$quantityNum.val(+$quantityNum.val() - 1);
				}
			}
			function quantityPlus() {
				$quantityNum.val(+$quantityNum.val() + 1);
			}
		})();
	});
	// При нажатии на кнопку появление Линейки и Рулетки
	$('.buttons button').on('click', function () {
		$('.summ,.rullet,.lin').addClass('active');
	});
	$('#polycarbonate').on('click', function () {
		$('.rullet,.lin').removeClass('active');
	})
	//При нажатии на Enter на следующее поле воода
	$('li input').keydown(function (e) {
		if (e.keyCode === 13) {
			$(this).next().focus();
		}
	});

	$('.text').on('input', function () {
		$(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]/, ''))
	});
	$(".width1").on('focus mouseenter', function () {
		$(this).attr("max", widthList);
		$(this).attr("min", 150);
	});
	$(".height1").on('focus mouseenter', function () {
		$(this).attr("max", heightList);
		$(this).attr("min", 150);
	});
	$(function () {
		$(".number")
			.selectmenu()
			.selectmenu("menuWidget")
			.addClass("overflow");
		$("#salutation").selectmenu();
	});

	/////////////////
	const newCuts = document.querySelectorAll('.newCut');
	for (let i = 0; i - newCuts.length; i++) {
		newCuts[i].onclick = targetCopyCut;

	}

	function targetCopyCut(e) {
		e = e.target;
		let width = $(e).siblings('.width1').val();
		let height = $(e).siblings('.height1').val();
		let sheet = $('.sheet').outerHeight()
		let adults = 0;
		function copyCut() {
			$('.saw:visible:last').outerWidth(width / widthValue())
			$('.saw:visible:last').outerHeight(height / heightValue())
			$('.saw:visible:last').children('.elW').text(width)
			$('.saw:visible:last').children('.elH').text(height)
			$('.saw').removeClass('active')
			$('.saw:visible:last').addClass('active')
		}

		function position() {
			const list = document.querySelector('.sheet').offsetWidth;
			let saws = $('.saw:visible')
			const sawL = $('.saw:visible:last')
			let cutPlus = 0;
			for (let i = 0; i < saws.length; i++) {
				cutPlus += saws[i].offsetWidth
				console.log(cutPlus)
			}
		}
		if (width !== '' && height !== '') {
			$('.cutV li').eq(liStep++).css({ 'display': 'flex' });
			$('.saw').eq(activeStep++).css({ 'display': 'flex' });
			$('.width1:visible:last').val(width);
			$('.height1:visible:last').val(height);
			position()
			copyCut()

		}
	}
	$('.saw').on('mouseenter', function () {
		$(this).removeClass('active')
		$('li:visible:last').removeClass('active')
	})

	onscroll = function () {
		var scrollHeight = Math.max(
			document.body.scrollHeight, document.documentElement.scrollHeight,
			document.body.offsetHeight, document.documentElement.offsetHeight,
			document.body.clientHeight, document.documentElement.clientHeight
		);
		if (window.scrollY >= scrollHeight - innerHeight) {
			let petWork = document.querySelector('.petwork')
			petWork.classList.add('active');
			$('#pre').addClass('text-typing')
		}
		else {
			document.querySelector('.petwork').classList.remove('active');
		}
	};
	$('.tags').on('focus', function () {
		$('.petwork').removeClass('active')
	})
	/////////////////////////
	$('.tags').on('input', function () {
		if ($(this).val() === '1') {
			$(this).val('Крылов Евгений Юрьевич')
		} else if ($(this).val() === '2') {
			$(this).val('Харитонов Евгений Станиславович')
		} else if ($(this).val() === '9') {
			$(this).val('Кутукова Ольга Алексеевна')
		}
	})
	const bordersBtn = document.querySelectorAll('.border');
	const topBtn = document.querySelectorAll('.topBtn');
	const btnLists = document.querySelector('.buttons');

	btnLists.addEventListener('click', toggs);

	function toggs(e) {
		if (e.target.classList.contains('topBtn')) {
			$('.borderBtn').slideUp()
			$('.topBtn').removeClass('active');
			if ($(e.target).next('.borderBtn').is(":hidden")) {
				$(e.target).toggleClass('active');
				$(e.target).next('.borderBtn').slideToggle()
			}
		}
	}
});
