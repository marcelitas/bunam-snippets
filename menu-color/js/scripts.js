$(document).ready(function(){
	/*
	 * Single Page Application
 	*/

	/* Set background-color */
	$('#spa nav ul li a').click(function(event){
		event.preventDefault();
		$('#spa nav').css('background-color', $(this).data('color'));
	});


	/*
	 * Natural Navigation
	*/

	/* Get background-color */
	$('nav').css('background-color', localStorage.getItem('background-color'));

	/* Set background-color */
	$('#natural nav ul li a').click(function(event){
		var color = $(this).data('color');
		$('nav').css('background-color', color);
		localStorage.setItem('background-color', color);
	});

	/* Remove LocalStorage */
	$('#deleteStorage').click(function(event){
		event.preventDefault();
		localStorage.removeItem('background-color');
	});
})
