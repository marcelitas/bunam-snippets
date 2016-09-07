$(document).ready(function(){
	$('ul:nth-child(1).nav.navbar-nav li a').click(function(event){
		event.preventDefault();
		if($('#submenu').data('unit') == $(this).data('unit')){
			$('#submenu').slideUp(500).html('').data('unit','');
		} else {
			var element = $(this);
			var submenu = '';
			$('#submenu').data('unit',element.data('unit'));
			responsive_submenu(element);
			if(submenu = localStorage.getItem(element.data('unit'))){
				responsive_submenu(element, submenu);
				$('#submenu').slideDown(500);
			} else{
				$.get(element.attr('href'), function(data){
					responsive_submenu(element, data);
					$('#submenu').slideDown(500);
					localStorage.setItem(element.data('unit'),data);
				});
			}
		}
	});

	/* Remove LocalStorage */
	$('#deleteStorage').click(function(event){
		event.preventDefault();
		$('.nav.navbar-nav li').each(function(){
			localStorage.removeItem($(this).find('a').data('unit'));
		});
	});

	function responsive_submenu(element, data){
		if($('body').width() < 768){
			$('#submenu').css('top', element.closest('li').position().top + 40).html(data);
		}
	}
});
