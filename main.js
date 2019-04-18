$(function () {

  $('.height').click(function() {
    $('.size-panel').clone().appendTo('.js-size-panel')
    // $('.size-panel label').text("Панель" + )
  });

  $('#calc1 input, #calc1 select').change(function () {

    var width = $(".width").val() / 100;
    var heigth = $(".heigth").val() / 100;
    var size = width * heigth;
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





});


// var input = prompt("UserNumber");
// function nextPalindrom(input) {
  
//   var i = input;
//   while(i < 100) {
//     var i;
//     var r = ('' + i.split('')).reverse();
//     i++
//     console.log(i);
//     if(i === r) {
//       break;
//     }
//   }
//   alert('Palindrom next ' + i)
 
// }

// nextPalindrom(input)





// var condition = (b) => {
//   var a = +b[0]
//   var c = +b[b.length - 1]
//   // console.log(a);
//   // console.log(c);


//   if (a == c) {
//     console.log("Yes")
//     return false
//   } else {
//     console.log("No")
//     return true
//   }
// }



// function result(x) {

//   // console.log(x)
//   // do {
//   //   x++
//   //   var b = ('' + x.split(''))
//   //   console.log(b)

//   // } while (condition(b) && x < 100) {
//   //   console.log(x)
//   // }

//   while(x < 100) {
//     x++


//     console.log(x);

//   }

// }

// result(x) 
