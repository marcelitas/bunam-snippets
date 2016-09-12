$(document).ready(function(){
	$('a[data-toggle="modal"]').click(function(event){
		var this_modal = $(this).data('target');
		if($('body').width() < 768){
			var width_modal = $(this_modal).width() - 60;
		} else {
			var width_modal = $(this_modal).find('.modal-dialog').width() - 40;
		}

		var porcent = (width_modal * 100) / $(this_modal).find('iframe').attr('width');
		console.log('Width ' + width_modal + ' - % ' + porcent);
		if(porcent < 100){
			var height_modal = $(this_modal).find('iframe').attr('height') * (porcent/100);
		} else {
			var height_modal = $(this_modal).find('iframe').attr('height');
		}
		var height_modal = $(this_modal).find('iframe').attr('height') * (porcent/100);
		$(this_modal).find('iframe').attr('width', width_modal);
		$(this_modal).find('iframe').attr('height', height_modal);

		$(this_modal).on('hidden.bs.modal', function () {
			var $this = $(this).find('iframe'),
				tempSrc = $this.attr('src');
			$this.attr('src', "");
			$this.attr('src', tempSrc);
		});
	});
});
