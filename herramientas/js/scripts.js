$(document).ready(function() {
	$('#tools').click(function(){
		$('.container').toggleClass("open-sidebar");
		$(this).toggleClass("open-sidebar");
		$('#sidebar').toggleClass("show-sidebar");
	});

	$('#sidebar ul li a').click(function(event){
		event.preventDefault();
		$('ul li ul').slideUp();
		$(this).closest('li').find('ul').slideDown();
	});
});
