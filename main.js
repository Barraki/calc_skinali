$(function () {


  $('#calc1 input, #calc1 select').change(function () {
    var width;
    var heigth;
    var size;
    $('.size-panel').each(function () {
      width = $(".size-panel .width").val() / 100;
      heigth = $(".size-panel .heigth").val() / 100;

    })
    size = width * heigth;
    console.log( $('#panel-2 .heigth').val() );
    
    var price;
    // console.log(size);


    if ($("#id_type_window").val() === "optiwait") {
      price = 2750;
    } else {
      price = 2050;
    }

    if ($("#id_type_install").val() === "holder") {
      price += 180
    }

    if ($("#hydro").prop('checked')) {
      price += 200
    }

    if ($("#zamer").prop('checked')) {
      price += 200
    }

    if ($("#install").prop('checked')) {
      price += 500
    }

    if ($("#shipping").prop('checked')) {
      price += 400
    }


    // console.log(price)
    $("#size").val(size)
    var result = Math.round(size * price);


    $("#result").html(result);
  });


  $('.js-add-panel').click(function () {
    var index;
    $('.size-panel').each(function () {
      index = $('.size-panel').index(this) + 2
    })
    if (index === 11) {
      return false
    }
    $('.js-size-panel').append('<div class="form-holder size-panel"><label for="panel">Панель ' + index + ' </label><input type="tel" class="width" name="width" /> <input type="tel" class="heigth" name="heigth" /></div>')

  });

});

