$(document).ready(function() {
	$('body').on('click', "#success", function(){

		$.ajax('insert.html', {
		success: function(response){$(".myDiv").append(response)}
		})
	})
// 	$.ajax('insert.html', {
// 		success: function(response){$(".myClass").html(response)},
// 		error: function(){alert('It didn\'t work!')},
// 		//{alert(errorType, errorMessage)}
// 		beforeSend: function(){$(".myDiv").addClass("isLoading")},
// 		complete: function(){$(".myDiv").addClass("isNotLoading")},
// 		data: {"id": 2, "name": "test", "guest": false},
// 		timeout: 3000
// 	})
// alert($('.myClass').data('myid'));  //don't use Caps when using data attribute
});