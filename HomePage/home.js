// Auto Smooth Scrolling
$('.page-scroll').on('click', function(e){

	//Get href
	var href = $(this).attr('href');

	//Get element
	var elementHref = $(href);

	//Scroll
	$('html, body').animate({
		scrollTop: (elementHref.offset().top)
	}, 100, 'linear'
	);

	e.preventDefault();
});

$(document).ready(function () {

  $('#employeeButton').click(function () { 
    window.location.href = "../employees/employee.html"
  });
	$('#subscriptionButton').click(function () { 
    window.location.href = "../subscription/index.html"
  });

});