$(document).ready(function(){
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('#button_up').fadeIn();
		} else {
			$('#button_up').fadeOut();
		}
	});

	$('#button_up').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
});
