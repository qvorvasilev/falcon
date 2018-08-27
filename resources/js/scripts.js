import jQuery from "./vendor/jquery.min.js";


jQuery(document).ready(function($) {
	
	/* Shows clear search button */
	$('#search').on('keyup', function(event) {
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
		return false;
	});


	// Parallax

	var sky = $('.sky');
	var sun = $('.parallax-img.sun');
	var surface = $('.surface');
	var pyramidLeft = $('.pyramid-left');
	var pyramidRight = $('.pyramid-right');

  	// Distance from parralax element to top 
  	// minus the section title height
    var distanceFromParallax = $('.parallax').offset().top - 35;
  	var scrollDistance = $(window).scrollTop();
  	var scrollPercent = 0;
  	
  	function parallaxEffect() {
		scrollDistance = $(window).scrollTop(),
	  	scrollPercent = Math.round((scrollDistance / distanceFromParallax) * 100);

	  	if(scrollPercent > 100) {
	  		scrollPercent = 100;
	  	}
	  

	  	var sunPos = Math.round(50 + scrollPercent*0.65) + 'px'; //because sun needs to travel exactly 65px distance
	  	var pyramidPosLeft = Math.round(15 - scrollPercent*0.2) + 'px';
	  	var pyramidPosRight = Math.round(-20 - scrollPercent*0.2) + 'px';
	  	var surfacePos = Math.round(0 - scrollPercent*0.2) + 'px';
	  	var skyPos = Math.round(0 - scrollPercent*5.1) + 'px';

	  	var sunShadow = sunBoxShadow(0, 0, 20, 5, scrollPercent);
	  	// var pyramidShadow = pyramidBoxShadow(2, 2, 10, 2, scrollPercent);
	  	// console.log(pyramidShadow);



		sun.css('box-shadow', '0px 0px ' + sunShadow.blur + 'px ' + sunShadow.spread + 'px #fc00d2');

		// pyramidLeft.css('box-shadow', pyramidShadow.horizontal+'px '+ pyramidShadow.vertical+'px ' + pyramidShadow.blur + 'px ' + pyramidShadow.spread + 'px rgba(8, 10, 101, .75)');
		// pyramidRight.css('box-shadow', pyramidShadow.horizontal+'px '+ pyramidShadow.vertical+'px ' + pyramidShadow.blur + 'px ' + pyramidShadow.spread + 'px rgba(8, 10, 101, .75)');

		// pyramidLeft.css('box-shadow', '0px 0px '  + (5 - (1/scrollPercent)*100) + 'px ' + (5 - (1/scrollPercent)*100) + 'px #080a65');


	  	sky.css('top', skyPos);
	  	sun.css('bottom', sunPos);
	  	pyramidLeft.css('bottom', pyramidPosLeft);
	  	pyramidRight.css('bottom', pyramidPosRight);
	  	surface.css('bottom', surfacePos);
  	}

  	function sunBoxShadow (h, v, b, s, percentage) {
  		var boxObj = {};

	  	boxObj.horizontal = Math.ceil(h - (1/percentage)*100);
	  	boxObj.vertical = Math.ceil(v - (1/percentage)*100);
	  	boxObj.blur = Math.ceil(b - (1/percentage)*100);
	  	boxObj.spread = Math.ceil(s - (1/percentage)*100);

	  	return boxObj;
  	}
  	function pyramidBoxShadow (h, v, b, s, percentage) {
  		var boxObj = {};

	  	boxObj.horizontal = Math.ceil(h+1 - (h*percentage)/100);
	  	boxObj.vertical = Math.ceil(v+1 - (h*percentage)/100);
	  	boxObj.blur = Math.ceil(b+1 - (b/100)*percentage);
	  	boxObj.spread = Math.ceil(s+1 - (s/100)*percentage);

	  	return boxObj;
  	}


	parallaxEffect();

	$(window).on('scroll', function(){
		parallaxEffect();
	})
});		


	
