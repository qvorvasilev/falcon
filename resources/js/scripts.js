import jQuery from "./vendor/jquery.min.js";


jQuery(document).ready(function($) {
	
	/* Shows clear search button */
	$('#search').on('keyup', function(event) {
		console.log(1);
		if ($(this).val()) {
			$(this).siblings('button').fadeIn('fast');
		} else {
			$(this).siblings('button').fadeOut('fast');
		}
	});

	/* Clears search field value on click */
	$('.clear-btn').on('click', function(event) {
		event.preventDefault();

		$('#search').val('');
		$(this).css('display', 'none');
	});	


	$('.disabled').click(function(event) {
		console.log(1);
		return false;
	});
});		


	
