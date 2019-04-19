$(function () {

  $('#calc1').change(function () {
    var width = 0;
    var heigth = 0;
    var size = 0;
    var price = 0;


    $('.size-panel').each(function () {

      width = parseInt($(this).find("#width").val());
      heigth = parseInt($(this).find("#heigth").val());

      size += width / 100 * heigth / 100;
      size.toFixed(2);
    })
  

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
    $('.js-size-panel').append('<div class="form-holder size-panel" id="panel-' + index + '"><label for="panel">Панель ' + index + ' </label><input type="tel" id="width" name="width" value="0"/> <input type="tel" id="heigth" name="heigth" value="0"/></div>')

  });

});

