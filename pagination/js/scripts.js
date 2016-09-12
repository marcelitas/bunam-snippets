$(document).ready(function(){

	var previous, next = '';

	var content_position, moving_position, pos_x = 0;
	var moving, direction = '';

	previous = $('.content').data('previous');
	next = $('.content').data('next');

	if(previous){
		$('#previous').attr('href',previous).show();
	}
	if(next){
		$('#next').attr('href',next).show();
	}

	$('.paginate').click(function(event){
		event.preventDefault();

		var link = $(this).attr('href');
		direction = $(this).attr('id');

		$.ajax({
			url: link,
			cache: true,
			success: function(html){

				$('.content').addClass('moving').removeClass('content');

				$('section').append(html);

				previous = $('.content').data('previous');
				next = $('.content').data('next');

				if(previous){
					$('#previous').attr('href',previous).show();
				} else {
					$('#previous').hide();
				}
				if(next){
					$('#next').attr('href',next).show();
				} else{
					$('#next').hide();
				}

				var link_array = link.split('/');

				$('.content img').each(function(){
					var link_element = $(this).attr('src').split('/');
					if(link_element[0] != 'http:' && link_element[0] != '..' && link_element[0] != '.'){
						var real_link = '';
						for(var i = 0; i < (link_array.length - 1); i ++){
							real_link += link_array[i] + '/';
						}
						real_link += $(this).attr('src');
						$(this).attr('src', real_link);
					}
				});

				$('.content').css({
					'position': 'absolute',
					'top': 0
				});

				if(direction == 'previous'){
					$('.content').css('left', '-' + $('body').width() + 'px');
				} else{
					$('.content').css('right', '-' + $('body').width() + 'px');
				}

				content_position = $('.content').position().left;
				moving_position = $('.moving').position().left;

				moving = setInterval(entrance, 1);

			}
		});


	});


	function entrance(){
		if(direction == 'previous'){
			if(-content_position == pos_x){
				clearInterval(moving);
				content_position, moving_position, pos_x = 0;
				$('.content').css('position', 'relative');
				$('.moving').remove();
			} else {
				$('.content').css('left', (content_position + pos_x) + 'px');
				$('.moving').css('left', (moving_position + pos_x) + 'px');
			}
		} else{
			if(content_position == pos_x){
				clearInterval(moving);
				content_position, moving_position, pos_x = 0;
				$('.content').css('position', 'relative');
				$('.moving').remove();
			} else {
				$('.content').css('left', (content_position - pos_x) + 'px');
				$('.moving').css('left', (moving_position - pos_x) + 'px');
			}
		}
		pos_x += 2;
	}
});
