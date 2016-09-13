$(document).ready(function(){
	var menu_position = $('nav.navbar.navbar-default').position().top;
	var menu_width = $('nav.navbar.navbar-default').width();

	$(window).scroll(function(){
		if ($(this).scrollTop() > menu_position) {
			$('nav.navbar.navbar-default').addClass('fixed_menu').css('width',menu_width);
		} else {
			$('nav.navbar.navbar-default').removeClass('fixed_menu');
		}
	});
});
