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


	// Parallax

	// function name (argument) {
	var sun = $('.parallax-img.sun');
	var surface = $('.surface');
	var pyramidLeft = $('.pyramid-left');
	var pyramidRight = $('.pyramid-right');
		// var sun = $('.sun');
	// }



  	var s = $(window).scrollTop(),
      	d = $(document).height(),
      	c = $(window).height(),
      	scrollPercent = 0;

	$(window).on('scroll', function(){
		s = $(window).scrollTop(),
      	d = $(document).height(),
      	c = $(window).height();
      	// console.log(d);

	  	scrollPercent = (s / (d - c)) * 100;
	  
	  	// console.clear();
	  	// console.log(Math.round(scrollPercent));

	  	// sun.css('display', 'none');
	  	var sunPos = Math.round(370 - scrollPercent*2.6) + 'px';
	  	var pyramidPosLeft = Math.round(342 - scrollPercent*1.85) + 'px';
	  	var pyramidPosRight = Math.round(289 - scrollPercent*1.85) + 'px';
	  	var surfacePos = Math.round(410 - scrollPercent*1.85) + 'px';
	  	console.log(surfacePos);


	  	sun.css('background-position-y', sunPos);
	  	pyramidLeft.css('background-position-y', pyramidPosLeft);
	  	pyramidRight.css('background-position-y', pyramidPosRight);
	  	surface.css('background-position-y', surfacePos);

	})






});		


	
