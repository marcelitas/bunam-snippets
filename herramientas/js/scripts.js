$(document).ready(function() {
	$('#tools').click(function(){
		$('.container').toggleClass("open-sidebar");
	});
	/*$("[data-toggle]").click(function() {
		var toggle_el = $(this).data("toggle");
		$(toggle_el).toggleClass("open-sidebar");
	});*/

	$('#sidebar ul li a').click(function(event){
		event.preventDefault();
		$('ul li ul').slideUp();
		$(this).closest('li').find('ul').slideDown();
	});
});
