$(function () {

	$("#btn-calc").click(function () {
		var width = $("#width").val() / 1000;
		var heigth = $("#heigth").val() / 1000;
		var size = width * heigth;
		var price;
		console.log(size);


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


		$("#result").html(result)
	})
})