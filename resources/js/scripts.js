import jQuery from "./vendor/jquery.min.js";


jQuery(document).ready(function($) {
	
	/* Shows clear search button */
	$('#search').on('keyup', function(event) {
		console.log(1);
		if ($(this).val()) {
			$(this).siblings('button').show('fast');
		} else {
			$(this).siblings('button').hide('fast');
		}
	});


	$('.disabled').click(function(event) {
		console.log(1);
		return false;
	});
});		


	
