$(document).ready(function(){
	var last_link = '';
	if(last_link = localStorage.getItem($('body').data('course'))){
		get_page(last_link);
	} else{
		get_page(false);
	}

	$('nav ul li a').click(function(event){
		event.preventDefault();
		var element = $(this);
		get_page(element.attr('href'));
	});

	/*
	 * Get the content and loads into the container
	*/
	function get_page(link){
		if(link){
			$.ajax({
				url: link,
				cache: false,
				success: function(data){
					$('section').html(data);
					set_url(link);
					localStorage.setItem($('body').data('course'),link);
				}
			});
		}
	}

	/*
	 * Set the url of all images into the content
	*/
	function set_url(link){
		var link_array = link.split('/');
		$('section img').each(function(){
			var link_element = $(this).attr('src').split('/');
			if(link_element[0] != 'http:' && link_element[0] != '..' && link_element[0] != '.'){
				var real_link = '';
				for(var i = 0; i < (link_array.length - 1); i ++){
					real_link += link_array[i] + '/';
				}
				real_link += $(this).attr('src');
				$(this).attr('src', real_link);
			}
		})
	}
});
