import jQuery from "./vendor/jquery.min.js";


jQuery(document).ready(function($) {
	$('.disabled').click(function(event) {
		console.log(1);
		return false;
	});
});		


	
