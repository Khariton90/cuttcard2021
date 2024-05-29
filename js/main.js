


$(document).ready(function () {
    const availableTags = [];
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 2100);

    $('.border_gkl,.border_playwood,.border_osb,.border_csp, #btn2').css({ 'display': 'flex' }).hide();

    let widthList;
    let heightList;
    const titleWidth = $('#width');
    const titleHeight = $('#height');
    const btn = $('button');
    const listName = $('#listName');
    const msg = $('.msg');
    const bordersBtn = document.querySelectorAll('.border');
    const topBtn = document.querySelectorAll('.topBtn');
    const btnLists = document.querySelector('.buttons');


    const cutHeight = $('.saw');
    const cutWidth = $('.cut');
    let activeStep = 0;
    let liStep = 0;


    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //Январь равен 0!
    let yyyy = today.getFullYear();

    //Дроп блоки

    $(function () {
        $(".saw").draggable({
            containment: "#list",
            scroll: false,
            snap: true,
            zIndex: 100,
            snapTolerance: 4,
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
        if ($('.cutV li').is(":visible")) {
            $('#btn2').slideDown();
            return
        }

        $('#btn2').hide();
        $('.values').css({ 'opacity': '0' });
    };

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

    function showAnswer(evt) {
        console.log(evt.target.id)
        widthList = blanks[evt.target.id].width;
        heightList = blanks[evt.target.id].height;
        $('.fone').css({ 'background': blanks[evt.target.id].image });
        listName.html(blanks[evt.target.id].title);


        if (widthList === heightList) {
            $('.sheet').width(230)
            return
        }

        $('.sheet').width(480)

    }
    //Коэффициент ширины к масштабу
    function widthValue(widthCoefficient) {
        return widthList === heightList ? widthList / 230 : widthList / 480
    }
    //Коэффициент высоты к масштабу
    function heightValue(heightCoefficient) {
        return heightList / 230;
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



    $('.tags').on('input', function () {
        if ($(this).val() === '1') {
            $(this).val('Крылов Евгений Юрьевич')
        } else if ($(this).val() === '2') {
            $(this).val('Харитонов Евгений Станиславович')
        } else if ($(this).val() === '9') {
            $(this).val('Кутукова Ольга Алексеевна')
        }
    })


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
